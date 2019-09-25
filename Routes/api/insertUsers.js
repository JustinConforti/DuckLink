const router = require("express").Router();
const insertControllers = require("../../controllers/insertControllers");

router.route("/")
  .post(insertControllers.insertUsers)
  
  router.route("/random")
  .post(insertControllers.random)
module.exports = router
