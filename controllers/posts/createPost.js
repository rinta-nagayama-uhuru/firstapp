const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async(req, res) => {
  try{
    await prisma.post.create({data: {content: req.body.content}}); //投稿をデータベースに保存
    HTMLFormControlsCollection.log("データ登録に成功しました");
  } catch(error){
    console.log("データ登録にエラーがありました");
    console.log(error);
  }
  res.redirect("/posts");
}