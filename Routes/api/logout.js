
const router = require("express").Router();
const logoutControllers = require("./../../controllers/logoutControllers");

// Matches with "/api/register"
router.route("/")
  .post(logoutControllers.userLogout);

module.exports = router