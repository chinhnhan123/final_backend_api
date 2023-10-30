const HerdRepository = require("../repositories/herd.repository");

const createHerd = async (data) => {
  try {
    const result = await HerdRepository.createHerd(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: Herd.service.js:8 ~ createHerd ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file err:", err);
  }
};

const getAllHerd = async (options, searchTerm) => {
  try {
    const result = await HerdRepository.getAllHerd(options, searchTerm);
    return result;
  } catch (err) {
    console.log("🚀 ~ file: Herd.service.js:19 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const getAllHerdByAccountId = async (idAccount) => {
  try {
    const result = await HerdRepository.getAllHerdByAccountId(idAccount);
    return result;
  } catch (err) {
    console.log("🚀 ~ file: Herd.service.js:19 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const updateHerd = async (id, data) => {
  try {
    const result = await HerdRepository.updateHerd(id, data);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const deleteOneHerd = async (id) => {
  try {
    const result = await HerdRepository.deleteHerd(id);
    return result;
  } catch (err) {
    console.log("🚀 ~ file: herd.service.js:45 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

const findHerdById = async (id) => {
  try {
    const result = await HerdRepository.findHerdById(id);
    return result;
  } catch (err) {
    console.log("🚀 ~ file: herd.service.js:55 ~ err:", err);
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createHerd,
  getAllHerdByAccountId,
  updateHerd,
  deleteOneHerd,
  findHerdById,
  getAllHerd,
};
