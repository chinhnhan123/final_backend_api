const express = require("express");

const router = express.Router();
const ConversationController = require("../../controllers/conversation.controller");

// get all conversation by accountId swagger
/**
 * @swagger
 * tags:
 *   name: Conversation
 *   description: The Conversation managing API
 * /conversation/{idAccount}:
 *   get:
 *     summary: Get all conversations.
 *     description: Retrieve a list of all conversations.
 *     tags: [Conversation]
 *     responses:
 *       200:
 *         description: A list of conversations.
 *       500:
 *         description: Internal server error.
 */

router.get("/:idAccount", ConversationController.getAllConversation);

// post conversation swagger
/**
 * @swagger
 * tags:
 *   name: Conversation
 *   description: The Conversation managing API
 * /conversation:
 *   post:
 *     summary: Create a new conversation.
 *     description: Create a new conversation.
 *     tags: [Conversation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                members:
 *                  type: array
 *                  items:
 *                    type: string
 *     responses:
 *       200:
 *         description: The conversation was created successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", ConversationController.createConversation);

// post check conversation swagger
/**
 * @swagger
 * tags:
 *   name: Conversation
 *   description: The Conversation managing API
 * /conversation/check:
 *   post:
 *     summary: Check conversation.
 *     description: Check conversation.
 *     tags: [Conversation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                members:
 *                  type: array
 *                  items:
 *                    type: string
 *     responses:
 *       200:
 *         description: The conversation was checked successfully
 *       500:
 *         description: Internal server error
 */

router.post("/check", ConversationController.checkConversation);

// update conversation swagger
/**
 * @swagger
 * tags:
 *   name: Conversation
 *   description: The Conversation managing API
 * /conversation/{id}:
 *   put:
 *     summary: Update conversation.
 *     description: Update conversation.
 *     tags: [Conversation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Conversation id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                members:
 *                  type: array
 *                  items:
 *                    type: string
 *     responses:
 *       200:
 *         description: The conversation was updated successfully
 *       500:
 *         description: Internal server error
 */

router.put("/:id", ConversationController.updateConversation);

// delete conversation swagger
/**
 * @swagger
 * tags:
 *   name: Conversation
 *   description: The Conversation managing API
 * /conversation/{id}:
 *   delete:
 *     summary: Delete conversation.
 *     description: Delete conversation.
 *     tags: [Conversation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Conversation id
 *     responses:
 *       200:
 *         description: The conversation was deleted successfully
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", ConversationController.deleteOneConversation);
module.exports = router;
