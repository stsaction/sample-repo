const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds with "Hello from the server!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from the server!');
  });
});
