const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Webアプリケーションのテスト', () => {
  describe('投稿のテスト', () => {
    afterEach(async () => {
      await prisma.post.deleteMany({});
      //各テストの後にデータベースを削除する
    })

    // 正常系
    it('新しい投稿を保存できる', async () => {
      const newPost = await prisma.post.create({
        data: {
          content: 'これはテスト投稿です。',
        },
      });

      expect(newPost).not.toBeNull();
      expect(newPost.content).toBe('これはテスト投稿です。');
    });
  });

  // 正常系
  describe('ページ遷移のテスト', () => {
    describe('トップページ遷移のテスト', () => {
      it('トップページに正しく遷移できる', async () => {
         const response = await request(app)
           .get("/posts")
           .expect(200);
         expect(response.text).toMatch(/トップページ/);
      }, 100000);
    });
  
    // 異常系
    describe('トップページの遷移に失敗', () => {
      it('未定義のパスにアクセスしたとき、リダイレクトして302エラーを返す', async () => {
        const response = await request(app)
          .get('/some-undefined-path')
          .expect(302);
        expect(response.headers.location).toEqual('/non-existent-page');
      });
    });
  });
})