const express = require("express");
const router = require("express").Router();
const authRoutes = require("./users");

// Users Routes
router.use("/users", authRoutes)