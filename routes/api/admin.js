const express = require("express");
const multer = require("multer");

const router = express.Router();
const AccountController = require("../../controllers/account.controller");
const upload = multer({ dest: "public/uploads/" });

router.get("/accounts", AccountController.getAllAccount);

router.get("/account/:id", AccountController.findAccountById);

router.post("/account", AccountController.createAccount);

router.put("/account/:id", AccountController.updateAccount);

router.patch("/lock-account/:id", AccountController.updateLockAccount);

router.patch(
  "/avatar/:id",
  upload.single("file"),
  AccountController.updateAvatar
);

module.exports = router;
