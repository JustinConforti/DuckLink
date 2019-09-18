const router = require("express").Router();
const usersRoutes = require("./users");
const registerRoutes = require("./register");

router.use("/users", usersRoutes);
router.use("/register", registerRoutes);

module.exports = router;