const router = require("express").Router();
const Book = require("../db").import("../models/book");

//POST
router.post("/", (req, res) =>
  Book.create({
    nameOfBook: req.body.book.nameOfBook,
    author: req.body.book.author,
    genre: req.body.book.genre,
    pubYear: req.body.book.pubYear,
    rating: req.body.book.rating
  })
    .then(book => res.json({ book: book }))
    .catch(err => res.send(500).json(req.errors))
);

//GET
router.get("/", (req, res) => {
  if (!req.errors) {
    Book.findAll()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(req.errors));
  } else {
    res.status(500).json(req.errors);
  }
});

//GET:
router.get("/:id", (req, res) =>
  Book.findOne({ where: { id: req.params.id } })
    .then(data => res.json(data))
    .catch(err => res.status(500).json(req.errors))
);

//PUT
router.put("/:id", (req, res) =>
  Book.update(req.body.book, { where: { id: req.params.id } })
    .then(data => res.status(200).json(data))
    .catch(err => res.send(500).json(req.errors))
);

//DELETE
router.delete("/:id", (req, res) =>
  Book.destroy({ where: { id: req.params.id } })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(req.errors))
);

module.exports = router;
