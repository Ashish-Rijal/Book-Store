const express = require("express");
const router = express.Router();
const Book = require("./book.model");

// post = when submit something fronted to db
//get = when get soemthing from db
//put/patch = when edit or update something in DB
//delete = when delete something

// post a book
router.post("/create-book", async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.log("Error creating book", error);
    res.status(500).send({ message: " Failed to create book" });
  }
});

// get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log("Error Fetching book", error);
    res.status(500).send({ message: " Failed to Fetch book" });
  }
});

//single book endpoint
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log("Error Fetching book", error);
    res.status(500).send({ message: " Failed to Fetch book" });
  }
});

//update book endpoint
router.put("/edit/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book updated successfully", book });
  } catch (error) {
    console.log("Error Updating a book", error);
    res.status(500).send({ message: " Failed to Update a book" });
  }
});

//delete book endpoint
router.delete("/delete/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({ message: "Book deleted successfully", book });
    } catch (error) {
        console.log("Error Deleting book", error);
        res.status(500).send({ message: "Failed to delete the book" });
    }
});

module.exports = router;
