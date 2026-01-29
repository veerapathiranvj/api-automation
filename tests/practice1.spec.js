const{test,expect}=require('@playwright/test');
test("put request",async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200); 

    console.log(await response.json());
    console.log("result:",response.json());



})
