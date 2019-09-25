const router = require("express").Router();
const usersRoutes = require("./users");
const registerRoutes = require("./register");
const loginRoutes = require("./login")
const logoutRoutes = require("./logout")
const userData = require("./myData");


router.use("/users", usersRoutes);
router.use("/register", registerRoutes);
router.use("/login", loginRoutes );
router.use("/logout", logoutRoutes);
router.use("/myData", userData)

module.exports = router;