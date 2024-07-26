// api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('returns the correct status code and result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
