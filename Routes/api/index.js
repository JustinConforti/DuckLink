const router = require("express").Router();
const authRoutes = require("./users");

// Users Routes
router.unsubscribe("/users", authRoutes)