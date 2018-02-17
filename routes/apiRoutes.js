const articleController = require('../controllers/articlesController');
const nytController = require('../controllers/nytController');

const name = require('jsFile');
module.exports = (app) => {
  app.get()

  app.get("/api/articles",  articleController.findAll)
  app.post("/api/articles", articleController.create)
  app.delete("/api/articles", articleController.delete)

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

}