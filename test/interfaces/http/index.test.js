import { assert } from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import app from '../../../src/interfaces/http/index';

describe('GET /', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Should return default api page', async () => {
    const result = await request(app).get('/');

    assert.equal(result.status, 200);
    assert.equal(result.text, 'API Positions Jobs for test');
  });
});
