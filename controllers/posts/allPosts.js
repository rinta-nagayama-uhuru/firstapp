module.exports = (req, res) => {
  const post = "これはコントローラーで定義した変数を確認するための文字列です";
  res.render("posts/allPosts", {post});
}