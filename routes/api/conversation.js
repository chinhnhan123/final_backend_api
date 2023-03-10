const express = require("express");

const router = express.Router();
const ConversationController = require("../../controllers/Conversation.controller");

router.get("/", ConversationController.getAllConversation);

router.post("/", ConversationController.createConversation);

router.put("/:id", ConversationController.updateConversation);

router.delete("/:id", ConversationController.deleteOneConversation);
module.exports = router;
