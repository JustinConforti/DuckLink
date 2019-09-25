const router = require("express").Router();
const duckControllers = require("../../controllers/duckControllers");

router.route("/")
  .post(duckControllers.updateReq)
  
  module.exports = router
