const ChatService = require("../services/chat.service");

const getChat = async (req, res) => {
  try {
    const conversationId = req.params.conversationId;
    const Chat = await ChatService.getChat(conversationId);
    res.send(Chat);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.controller.js:8 ~ getChat ~ error:", error);
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    throw res.sendStatus(500);
  }
};

const findChatById = async (req, res) => {
  try {
    const id = req.params.id;
    const Chat = await ChatService.findChatById(id);
    res.send(Chat);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Chat.controller.js:22 ~ findChatByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createChat = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const Chat = await ChatService.createChat(req.body);
    if (!Chat) return res.sendStatus(500);
    return res.status(200).send(Chat);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Chat.controller.js:43 ~ createChat ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const deleteOneChat = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteChat = await ChatService.deleteOneChat(req.params.id);
    if (!deleteChat) return res.sendStatus(500);
    return res.status(200).send(deleteChat);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Chat.controller.js:64 ~ deleteOneChat ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateChat = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateChat = await BookServices.updateChat(req.params.id, req.body);
    return res.status(200).send(updateChat);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Chat.controller.js:90 ~ updateChat ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  createChat,
  getChat,
  updateChat,
  deleteOneChat,
  findChatById,
};
