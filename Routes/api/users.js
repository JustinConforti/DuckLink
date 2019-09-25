
const router = require("express").Router();
const duckController = require("../../controllers/duckControllers");

// Matches with "/api/users"
router.route("/")
  .post(duckController.create)
  .get(duckController.findById)
  

// Matches with "/api/users/:id"
router.route("/:id")
  .get(duckController.findById)
  .put(duckController.update);

module.exports = router
