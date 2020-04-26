const request = require('supertest');
const app = require('../../src/server/app');

test("Test create quizz no auth", async () => {
    const response = await request(app).post('/api/quizesapi');

    expect(response.statusCode).toBe(401);
});

test("Create game with auth", async () => {
    const user = request.agent(app);

    const signup = await user.post('/api/signup')
        .send({userId:'auth_user', password:"bar"})
        .set("Content-Type", "application/json");

    expect(signup.statusCode).toBe(201);

    // const response = await user.post('/api/quizesapi');

    // expect(response.body.length).toBe(3);
})