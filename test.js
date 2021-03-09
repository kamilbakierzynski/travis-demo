const app = require("./index");
const request = require('supertest');
const assert = require('assert');

describe('GET', function () {
  it('responds with json', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200)
      .then((response) => {
        assert(response, "Hello world!");
        done();
      })
      .catch(done);
  });
});

describe('POST', function () {
  it('responds with json', function (done) {
    const sampleBody = { test: "Test" };
    request(app)
      .post('/')
      .set('Accept', 'application/json')
      .send(sampleBody)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        assert(response.body.test === sampleBody.test);
        done();
      })
      .catch(done);
  });
});

describe('PUT', function () {
  it('responds with json', function (done) {
    const sampleBody = { test: "Test" };
    request(app)
      .put('/')
      .set('Accept', 'application/json')
      .send(sampleBody)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        assert(response.body.test === sampleBody.test);
        done();
      })
      .catch(done);
  });
});

describe('DELETE', function () {
  it('responds with json', function (done) {
    const sampleBody = { test: "Test" };
    request(app)
      .delete('/')
      .set('Accept', 'application/json')
      .send(sampleBody)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        assert(response.body.test === sampleBody.test);
        done();
      })
      .catch(done);
  });
});