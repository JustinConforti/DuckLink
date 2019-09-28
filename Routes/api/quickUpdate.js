const router = require("express").Router();
const duckControllers = require("../../controllers/duckControllers");

router.route("/")
  .post(duckControllers.quickUpdate)

  
  module.exports = router
