const { test, expect } = require('@playwright/test');
test("put request", async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: "api put updated",
            body: "updated body",
        }


    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
    console.log("result:", await response.json());
    const restdata = await response.json();
    expect(restdata.id).toBe(1);
    expect(restdata.title).toBe("api put updated");
    expect(restdata.body).toBe("updated body");

})

test('patch request', async ({ request }) => {
    const patchrequest = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            name: "updated name"
        }
    })
    const patchdata = await patchrequest.json()
    expect(patchrequest.status()).toBe(200);
    expect(patchdata.name).toBe("updated name");
    console.log("patchdata:", patchdata)
})
     test('patch get request', async ({ request }) => {
    const patchrequest = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const patchdata = await patchrequest.json(); 
    expect(patchrequest.status()).toBe(200);
    console.log('patchdata:',patchdata);  //crt ah check pannu 3 test kum different irrku 
     })



