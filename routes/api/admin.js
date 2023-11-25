const express = require("express");
const multer = require("multer");

const router = express.Router();
const AccountController = require("../../controllers/account.controller");
const upload = multer({ dest: "public/uploads/" });

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /accounts:
 *   get:
 *     summary: Get all accounts.
 *     description: Retrieve a list of all user accounts.
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: A list of user accounts.
 *       500:
 *         description: Internal server error.
 */
router.get("/accounts", AccountController.getAllAccount);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /account/{id}:
 *   get:
 *     summary: Get a account by ID.
 *     description: Retrieve a single account with a given id.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The account id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A account object
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.get("/account/:id", AccountController.findAccountById);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /total-account-vip:
 *   get:
 *     summary: Get total account vip.
 *     description: Retrieve total account vip.
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: A total account vip.
 *       500:
 *         description: Internal server error.
 */

router.get("/total-account-vip", AccountController.totalAccountVIP);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /total-account-farmer:
 *   get:
 *     summary: Get total account farmer.
 *     description: Retrieve total account farmer.
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: A total account farmer.
 *       500:
 *         description: Internal server error.
 */

router.get("/total-account-farmer", AccountController.totalAccountFarmer);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /total-account-trader:
 *   get:
 *     summary: Get total account trader.
 *     description: Retrieve total account trader.
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: A total account trader.
 *       500:
 *         description: Internal server error.
 */

router.get("/total-account-trader", AccountController.totalAccountTrader);

/**
 * @swagger
 * tags:
 *  name: Accounts
 * description: The Accounts managing API
 * /account:
 *  post:
 *   summary: Create a new account.
 *   description: Create a new account.
 *   tags: [Accounts]
 *   requestBody:
 *   required: true
 */

router.post("/account", AccountController.createAccount);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /account/{id}:
 *   put:
 *     summary: Delete the account by id.
 *     description: Delete the account by id.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The account id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The account was deleted successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.put("/account/:id", AccountController.updateAccount);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /account/{id}:
 *   patch:
 *     summary: Delete the account by id.
 *     description: Delete the account by id.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The account id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The account was deleted successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.patch("/lock-account/:id", AccountController.updateLockAccount);

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /avatar/{id}:
 *   patch:
 *     summary: Update avatar account by id.
 *     description: Update avatar account by id.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The account id
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: The account was updated successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.patch(
  "/avatar/:id",
  upload.single("file"),
  AccountController.updateAvatar
);

// patch vipAccount /vip-account/:id swagger
/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: The Accounts managing API
 * /vip-account/{id}:
 *   patch:
 *     summary: Update vip account by id.
 *     description: Update vip account by id.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The account id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The account was updated successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.patch("/vip-account/:id", AccountController.updateVIPAccount);

module.exports = router;
