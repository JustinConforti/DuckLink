const express = require("./node_modules/express");
const router = require("./node_modules/express").Router();
const authRoutes = require("./users");

// Users Routes
router.use("/users", authRoutes)



