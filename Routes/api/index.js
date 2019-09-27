const router = require("express").Router();
const usersRoutes = require("./users");
const registerRoutes = require("./register");
const loginRoutes = require("./login")
const logoutRoutes = require("./logout")
const userData = require("./myData");
const insertUsers = require("./insertUsers")
const insertRandom = require("./insertUsers")
const duckUpdate = require("./duckUpdate")
const quickUpdate = require("./quickUpdate");

router.use("/users", usersRoutes);
router.use("/users/:id", usersRoutes)
router.use("/register", registerRoutes);
router.use("/login", loginRoutes );
router.use("/logout", logoutRoutes);
router.use("/myData", userData);
router.use("/insertUsers", insertUsers)
router.use("/insertUsers/random", insertRandom)
router.use("/duckUpdate", duckUpdate);
router.use("/quickUpdate", quickUpdate);


module.exports = router;