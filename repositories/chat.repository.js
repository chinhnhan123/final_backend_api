const ChatModel = require("../database/models/chat");

const createChat = async (data) => {
  try {
    const Chat = await ChatModel.create(data);
    return Chat;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:8 ~ createChat ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    return err;
  }
};

const getChat = async (conversationId) => {
  try {
    const Chat = await ChatModel.find({ conversationId });
    return Chat;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:26 ~ getChat ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateChat = async (id, data) => {
  try {
    const Chat = await ChatModel.updateMany(id, data);
    return Chat;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:40 ~ updateChat ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteChat = async (id) => {
  try {
    const Chat = await ChatModel.findOneAndRemove(id);
    return Chat;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:50 ~ deleteChat ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    return err;
  }
};

const findChatById = async (id) => {
  try {
    const result = await ChatModel.findById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:67 ~ findChatById ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createChat,
  getChat,
  updateChat,
  deleteChat,
  findChatById,
};
