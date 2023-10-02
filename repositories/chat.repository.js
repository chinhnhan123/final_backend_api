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
    console.log("🚀 ~ file err:", err);
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
    console.log("🚀 ~ file err:", err);
  }
};

const updateChat = async (id, data) => {
  try {
    const Chat = await ChatModel.updateMany({ _id: id }, data);
    return Chat;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:40 ~ updateChat ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const deleteChat = async (id) => {
  try {
    const Chat = await ChatModel.findOneAndRemove({ _id: id });
    return Chat;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:50 ~ deleteChat ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    console.log("🚀 ~ file err:", err);
  }
};

const findChatById = async (id) => {
  try {
    const result = await ChatModel.findById({ _id: id });
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Chat.repository.js:67 ~ findChatById ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createChat,
  getChat,
  updateChat,
  deleteChat,
  findChatById,
};
