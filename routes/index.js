const express = require("express");
const router = express.Router();

//サーバーサイドの処理を読み込み
const allPosts = require("../controllers/posts/allPosts");
const createGet = require("../controllers/posts/createGet");

//リクエストに対する実行処理を定義
router.get("/posts", allPosts);             //投稿一覧表示
router.get("/posts/create", createGet);     //投稿画面表示

module.exports = router;
