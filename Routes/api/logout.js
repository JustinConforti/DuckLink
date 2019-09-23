
const router = require("express").Router();
const logoutControllers = require("./../../controllers/loginControllers");

// Matches with "/api/register"
router.route("/")
  .post(logoutControllers);

module.exports = router