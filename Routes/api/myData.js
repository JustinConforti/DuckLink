const router = require("express").Router();
const user = require("../../controllers/userData");

// Matches with "/api/register"
router.route("/")
  .get(user.userData)

module.exports = router
