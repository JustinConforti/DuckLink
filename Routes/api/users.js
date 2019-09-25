
const router = require("express").Router();
const duckController = require("../../controllers/duckControllers");

// Matches with "/api/books"
router.route("/")
  .post(duckController.create)
  .get(duckController.findById)

// Matches with "/api/books/:id"
router.route("/:id")
  .get(duckController.findById)
  .put(duckController.update);


module.exports = router
