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
    return err;
  }
};

const getAllConversation = async () => {
  try {
    const Conversation = await ConversationModel.find();
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
    return err;
  }
};

const updateConversation = async (id, data) => {
  try {
    const Conversation = await ConversationModel.updateMany(id, data);
    return Conversation;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.repository.js:40 ~ updateConversation ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteConversation = async (id) => {
  try {
    const Conversation = await ConversationModel.findOneAndRemove(id);
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

    return err;
  }
};

const findConversationById = async (id) => {
  try {
    const result = await ConversationModel.findById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Conversation.repository.js:67 ~ findConversationById ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createConversation,
  getAllConversation,
  updateConversation,
  deleteConversation,
  findConversationById,
};