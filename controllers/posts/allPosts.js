const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async(req, res) => {
  const posts = await prisma.post.findMany();
  const test = "テスト文字列";
  res.render("posts/allPosts", {posts, test});
}