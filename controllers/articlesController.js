const db = require('../models');
module.exports = {
  findAll: function (req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(err => res.status(422).json)
  },
  create: function (req, res) {
    // Grab every document in the Articles collection
    db.Article.create(req.body)
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(err => res.status(422).json)
  },
  delete: function (req, res) {
    db.Note
      .remove({ _id: req.params.id })
      .then(function (article) {
        res.json(dbNote);
      })
      .catch( err => res.status(422).json)
  }
}