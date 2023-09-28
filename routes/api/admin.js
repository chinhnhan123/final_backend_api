const express = require("express");

const router = express.Router();
const AccountController = require("../../controllers/account.controller");

router.get("/accounts", AccountController.getAllAccount);

router.get("/account/:id", AccountController.findAccountById);

router.post("/account", AccountController.createAccount);

router.put("/account/:id", AccountController.updateAccount);

router.patch("/lock-account/:id", AccountController.updateLockAccount);

module.exports = router;
