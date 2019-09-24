
const router = require("express").Router();
const loginControllers = require("./../../controllers/loginControllers");

// Matches with "/api/register"
router.route("/")
  .post(loginControllers.userLogin)
module.exports = router