const HerdModel = require("../database/models/herd");

const createHerd = async (data) => {
  try {
    const Herd = await HerdModel.create(data);
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:9 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const getAllHerd = async () => {
  try {
    const Herd = await HerdModel.find().populate("idAccount idCategory");
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:19 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const getAllHerdByAccountId = async (idAccount) => {
  try {
    const Herd = await HerdModel.find({ idAccount: idAccount }).populate(
      "idAccount idCategory"
    );
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:19 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const updateHerd = async (id, data) => {
  try {
    const Herd = await HerdModel.updateMany({ _id: id }, data);
    return Herd;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:29 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const deleteHerd = async (id) => {
  try {
    const Herd = await HerdModel.findOneAndRemove({ _id: id });
    return Herd;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.repository.js:50 ~ deleteHerd ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    console.log("🚀 ~ file err:", err);
  }
};

const findHerdById = async (id) => {
  try {
    const result = await HerdModel.findById({ _id: id }).populate("idCategory");
    return result;
  } catch (err) {
    console.log("🚀 ~ file: herd.repository.js:56 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createHerd,
  getAllHerdByAccountId,
  updateHerd,
  deleteHerd,
  findHerdById,
  getAllHerd,
};
