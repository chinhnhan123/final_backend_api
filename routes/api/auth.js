const express = require("express");

const router = express.Router();
const AuthController = require("../../controllers/Auth.controller");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/logout", AuthController.logout);

module.exports = router;