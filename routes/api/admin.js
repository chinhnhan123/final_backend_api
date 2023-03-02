const express = require("express");

const router = express.Router();
const AccountController = require("../../controllers/account.controller");

router.get("/account", AccountController.getAllAccount);

router.post("/account", AccountController.createAccount);

router.put("/account/:id", AccountController.updateAccount);

router.delete("/account/:id", AccountController.updateLockAccount);

module.exports = router;
