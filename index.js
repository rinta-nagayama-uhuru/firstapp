const express = require("express");
const app = express();

const routers = require("./routes");
app.use(routers);

//localhost:3000で起動
app.listen(3000, () =>{
  console.log("Listening on localhost port 3000");
})