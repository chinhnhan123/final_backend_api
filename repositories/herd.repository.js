const HerdModel = require("../database/models/herd");

const createHerd = async (data) => {
  try {
    const Herd = await HerdModel.create(data);
    return Herd;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.repository.js:8 ~ createHerd ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    return err;
  }
};

const getAllHerd = async () => {
  try {
    const Herd = await HerdModel.find();
    return Herd;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.repository.js:26 ~ getAllHerd ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateHerd = async (id, data) => {
  try {
    const Herd = await HerdModel.updateMany(id, data);
    return Herd;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.repository.js:40 ~ updateHerd ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteHerd = async (id) => {
  try {
    const Herd = await HerdModel.findOneAndRemove(id);
    return Herd;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.repository.js:50 ~ deleteHerd ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    return err;
  }
};

const findHerdByIdAccount = async (id) => {
  try {
    const result = await HerdModel.findById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Herd.repository.js:73 ~ findHerdByIdAccount ~ err:",
      err
    );
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createHerd,
  getAllHerd,
  updateHerd,
  deleteHerd,
  findHerdByIdAccount,
};
