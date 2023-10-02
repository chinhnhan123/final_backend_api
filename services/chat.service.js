const ChatRepository = require("../repositories/chat.repository");

const createChat = async (data) => {
  try {
    const result = await ChatRepository.createChat(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: Chat.service.js:8 ~ createChat ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");

    console.log("🚀 ~ file err:", err);
  }
};

const getChat = async (conversationId) => {
  try {
    const result = await ChatRepository.getChat(conversationId);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.service.js:27 ~ getChat ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const updateChat = async (id, data) => {
  try {
    const result = await ChatRepository.updateChat(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.service.js:46 ~ updateChat ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const deleteOneChat = async (id) => {
  try {
    const result = await ChatRepository.deleteChat(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.service.js:58 ~ deleteOneChat ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const findChatById = async (id) => {
  try {
    const result = await ChatRepository.findChatById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.service.js:84 ~ findChatById ~ err:", err);
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createChat,
  getChat,
  updateChat,
  deleteOneChat,
  findChatById,
};
