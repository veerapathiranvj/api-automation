const { test, expect } = require('@playwright/test');

test('Verify users API response', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  // 1️⃣ Status code 200 check
  expect(response.status()).toBe(200);

  const users = await response.json();

  // 2️⃣ Verify response has 10 users
  expect(users.length).toBe(10);

  // 3️⃣ Verify each user has id, name, email
  for (const user of users) {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');

    // optional: values empty illama irukka nu check
    expect(user.id).toBeTruthy();
    expect(user.name).toBeTruthy();
    expect(user.email).toBeTruthy();
  }
  console.log( await users.json())
});