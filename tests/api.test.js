const { expect } = require('chai');
const supertest = require('supertest');

const { port } = require('../config');
const baseUrl = `http://localhost:${port}`;

describe('One Chat Room API', function() {
  it('should create a message', async function() {

    const req = {
      author: 'SuperTest',
      contents: 'Hello API'
    };

    const res = await supertest(baseUrl).post('/api/messages').send(req);

    expect(res.status).to.equal(201);
    expect(res.body).to.deep.include(req);
    expect(res.body.id).to.be.a('string');
    expect(res.body.createdAt).to.be.a('string');
    expect(res.body.updatedAt).to.be.a('string');
  });
});