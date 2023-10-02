const ConversationRepository = require("../repositories/conversation.repository");

const createConversation = async (data) => {
  try {
    const result = await ConversationRepository.createConversation(data);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const getAllConversation = async (idAccount) => {
  try {
    const result = await ConversationRepository.getAllConversation(idAccount);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const checkConversation = async (idAccounts) => {
  try {
    const result = await ConversationRepository.checkConversation(idAccounts);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateConversation = async (id, data) => {
  try {
    const result = await ConversationRepository.updateConversation(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.service.js:46 ~ updateConversation ~ err:",
      err
    );
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const deleteOneConversation = async (id) => {
  try {
    const result = await ConversationRepository.deleteConversation(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.service.js:58 ~ deleteOneConversation ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const findConversationById = async (id) => {
  try {
    const result = await ConversationRepository.findConversationById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.service.js:84 ~ findConversationById ~ err:",
      err
    );
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createConversation,
  getAllConversation,
  updateConversation,
  deleteOneConversation,
  findConversationById,
  checkConversation,
};
