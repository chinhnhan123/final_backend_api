const express = require("express");

const router = express.Router();
const ConversationController = require("../../controllers/conversation.controller");

router.get("/:idAccount", ConversationController.getAllConversation);

router.post("/", ConversationController.createConversation);

router.put("/:id", ConversationController.updateConversation);

router.delete("/:id", ConversationController.deleteOneConversation);
module.exports = router;
