const request = require('supertest');
const app = require('../app');

describe('ページ遷移のテスト', () => {
  describe('トップページ遷移のテスト', () => {
    it('トップページに正しく遷移できる', async () => {
       const response = await request(app)
         .get("/posts")
         .expect(200);
       expect(response.text).toMatch(/トップページ/);
    }, 100000);
  });
});