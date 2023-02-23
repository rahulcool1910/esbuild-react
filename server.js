const express = require("express");
const path = require("path");

const app = express();
const port = 8080;
const ROOT_DIR = path.join(__dirname, ".");

if (require.main === module) {
  serve();
}

function serve() {
  app.use(express.static(path.join(ROOT_DIR, "public")));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(ROOT_DIR,'public', "index.html"));
  });

  app.listen(port);
  console.log(`
     e@@@@@@@@@@@@@@@   %c Starting Server at port 8080
    @@@""""""""""
   @" ___ ___________
  II__[w] | [i] [z] |
 {======|_|~~~~~~~~~|
/oO--000'"-OO---OO-     
`);
}

module.exports = serve;
