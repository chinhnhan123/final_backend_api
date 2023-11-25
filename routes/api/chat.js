const express = require("express");

const router = express.Router();
const ChatController = require("../../controllers/chat.controller");

// get all chat swagger
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: The Chat managing API
 * /chat/:conversationId:
 *   get:
 *     summary: Get all chats.
 *     description: Retrieve a list of all chats.
 *     tags: [Chat]
 *     responses:
 *       200:
 *         description: A list of chats.
 *       500:
 *         description: Internal server error.
 */

router.get("/:conversationId", ChatController.getChat);

// post chat swagger
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: The Chat managing API
 * /chat:
 *   post:
 *     summary: Create a new chat.
 *     description: Create a new chat.
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                conversationId:
 *                  type: string
 *                senderId:
 *                  type: string
 *                text:
 *                  type: string
 *                media:
 *                  type: string
 *                call:
 *                  type: string
 *     responses:
 *       200:
 *         description: The chat was created successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", ChatController.createChat);

// update chat swagger
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: The Chat managing API
 * /chat/{id}:
 *   put:
 *     summary: Update the chat by id.
 *     description: Update the chat by id.
 *     tags: [Chat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The chat id
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                conversationId:
 *                  type: string
 *                senderId:
 *                  type: string
 *                text:
 *                  type: string
 *                media:
 *                  type: string
 *                call:
 *                  type: string
 *     responses:
 *       200:
 *         description: The chat was updated successfully
 *       404:
 *         description: The chat was not found
 *       500:
 *         description: Internal server error
 */

router.put("/:id", ChatController.updateChat);

// delete chat swagger
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: The Chat managing API
 * /chat/{id}:
 *   delete:
 *     summary: Delete the chat by id.
 *     description: Delete the chat by id.
 *     tags: [Chat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The chat id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The chat was deleted successfully
 *       404:
 *         description: The chat was not found
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", ChatController.deleteOneChat);
module.exports = router;
