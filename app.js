const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

const routers = require("./routes");
app.use(routers);

module.exports = app;

app.use((err, req, res, next) => {
  console.error('エラーキャッチ:', err); // ここで詳細エラー出力
  res.status(500).send('Internal Server Error');
});