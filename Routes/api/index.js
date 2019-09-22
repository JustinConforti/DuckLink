const router = require("express").Router();
const usersRoutes = require("./users");
const registerRoutes = require("./register");
const myData = require("./myData");
const loginRoutes = require("./login")

router.use("/users", usersRoutes);
router.use("/register", registerRoutes);
router.use("/login", loginRoutes );

module.exports = router;