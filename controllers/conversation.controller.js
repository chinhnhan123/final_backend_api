const ConversationService = require("../services/Conversation.service");

const getAllConversation = async (req, res) => {
  try {
    const Conversation = await ConversationService.getAllConversation();
    res.send(Conversation);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.controller.js:8 ~ getAllConversation ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const findConversationById = async (req, res) => {
  try {
    const id = req.params.id;
    const Conversation = await ConversationService.findConversationById(id);
    res.send(Conversation);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.controller.js:22 ~ findConversationByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createConversation = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const Conversation = await ConversationService.createConversation(req.body);
    if (!Conversation) return res.sendStatus(500);
    return res.status(200).send(Conversation);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.controller.js:43 ~ createConversation ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const deleteOneConversation = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteConversation = await ConversationService.deleteOneConversation(
      req.params.id
    );
    if (!deleteConversation) return res.sendStatus(500);
    return res.status(200).send(deleteConversation);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.controller.js:64 ~ deleteOneConversation ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateConversation = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateConversation = await BookServices.updateConversation(
      req.params.id,
      req.body
    );
    return res.status(200).send(updateConversation);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.controller.js:90 ~ updateConversation ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  createConversation,
  getAllConversation,
  updateConversation,
  deleteOneConversation,
  findConversationById,
};
