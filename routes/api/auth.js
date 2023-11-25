const express = require("express");

const router = express.Router();
const AuthController = require("../../controllers/auth.controller");

// post register swagger
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /register:
 *   post:
 *     summary: Register a new account.
 *     description: Register a new account.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *                email:
 *                  type: string
 *                phone:
 *                  type: string
 *                address:
 *                  type: string
 *                fullname:
 *                  type: string
 *                avatar:
 *                  type: string
 *                role:
 *                  type: string
 *     responses:
 *       200:
 *         description: The account was updated successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.post("/register", AuthController.register);

// post login swagger
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /login:
 *   post:
 *     summary: Login account.
 *     description: Login account.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: The account was updated successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.post("/login", AuthController.login);

// post logout swagger
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /logout:
 *   post:
 *     summary: Logout account.
 *     description: Logout account.
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: The account was updated successfully
 *       404:
 *         description: The account was not found
 *       500:
 *         description: Internal server error
 */

router.post("/logout", AuthController.logout);

module.exports = router;
