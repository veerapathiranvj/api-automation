const { test, expect } = require('@playwright/test')
test('post request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        "title": "API Test",
        "body": "Testing POST request",
        "userId": 1
    })

    expect(response.status()).toBe(201)


    const responsebody = await response.json()

    expect(typeof responsebody.id).toBe('number');
    console.log("response:", responsebody);
    console.log(responsebody.length)
})
