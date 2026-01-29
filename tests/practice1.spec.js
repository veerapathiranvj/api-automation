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
