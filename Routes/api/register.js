
const router = require("express").Router();
const registerControllers = require("../../controllers/registerControllers");

// Matches with "/api/register"
router.route("/")
  .post(registerControllers.registerUser)

module.exports = router
