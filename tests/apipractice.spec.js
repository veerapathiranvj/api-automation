const { test, expect } = require('@playwright/test');
test('api get', async ({ request }) => {
     const reponse = await request.get('https://automationexercise.com/api/productsList');
     expect(reponse.status()).toBe(200);
     const text = await reponse.text();
     expect(text).toContain('Blue Top');
     console.log(await reponse.json())

})

test('api post request', async ({request}) => {
     const response = await request.post('https://automationexercise.com/api/searchProduct', {
          form: {
               search_product: "top"
          }
     });
     expect(response.status()).toBe(200)
     console.log(await response.json())






})

test("api put method", async ({ request }) => {
     const putmetd = await request.put('https://automationexercise.com/api/brandsList')
     expect(putmetd.status()).toBe(200)
     console.log(await putmetd.json())

})

test('api post2', async ({ request }) => {
     const post1 = await request.post('https://automationexercise.com/api/searchProduct');
     expect(post1.status()).toBe(200)
     console.log(await post1.json())
})



test('api get email', async ({ request }) => {
     const email = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
          params: {
               email: "vj@gmail.com"
          }
     })
     expect(email.status()).toBe(200)
     console.log(await email.json())
})


test('api invalid login', async ({ request }) => {
     const invalid = await request.post('https://automationexercise.com/api/verifyLogin', {
          form: {
               email: "vijay@gmail.com",
               password: "veeravj"
          }
     })
     expect(invalid.status()).toBe(200);
     console.log(await invalid.json())
})  


test.only("chatgpt task",async({request})=>{
     const link= await request.get('https://jsonplaceholder.typicode.com/users');
     expect(link.status()).toBe(200)
     console.log(await link.json());
       


     expect(link).toHaveProperty('id');
expect(link).toHaveProperty('name');
expect(link).toHaveProperty('email');
})