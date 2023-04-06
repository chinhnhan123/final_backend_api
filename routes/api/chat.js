const express = require("express");

const router = express.Router();
const ChatController = require("../../controllers/chat.controller");

router.get("/:conversationId", ChatController.getChat);

router.post("/", ChatController.createChat);

router.put("/:id", ChatController.updateChat);

router.delete("/:id", ChatController.deleteOneChat);
module.exports = router;
