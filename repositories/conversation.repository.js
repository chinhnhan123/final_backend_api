const ConversationModel = require("../database/models/Conversation");

const createConversation = async (data) => {
  try {
    const Conversation = await ConversationModel.create(data);
    return Conversation;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.repository.js:8 ~ createConversation ~ err:",
      err
    );
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const checkConversation = async (idAccounts) => {
  try {
    const conversation = await ConversationModel.findOne({
      idAccount: { $all: idAccounts.idAccount },
    });
    return !!conversation;
  } catch (error) {
    console.error("Lỗi khi kiểm tra cuộc trò chuyện:", error);
  }
};

const getAllConversation = async (idAccount) => {
  try {
    const Conversation = await ConversationModel.find({
      idAccount: { $in: [idAccount] },
    });
    return Conversation;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.repository.js:26 ~ getAllConversation ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const updateConversation = async (id, data) => {
  try {
    const Conversation = await ConversationModel.updateMany({ _id: id }, data);
    return Conversation;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const deleteConversation = async (id) => {
  try {
    const Conversation = await ConversationModel.findOneAndRemove({ _id: id });
    return Conversation;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.repository.js:50 ~ deleteConversation ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    console.log("🚀 ~ file err:", err);
  }
};

const findConversationById = async (id) => {
  try {
    const result = await ConversationModel.findById({ _id: id });
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createConversation,
  getAllConversation,
  updateConversation,
  deleteConversation,
  findConversationById,
  checkConversation,
};
