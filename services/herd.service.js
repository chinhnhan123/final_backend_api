const HerdRepository = require("../repositories/herd.repository");

const createHerd = async (data) => {
  try {
    const result = await HerdRepository.createHerd(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: Herd.service.js:8 ~ createHerd ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");
    return err;
  }
};

const getAllHerd = async () => {
  try {
    const result = await HerdRepository.getAllHerd();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.service.js:27 ~ getAllHerd ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateHerd = async (id, data) => {
  try {
    const result = await HerdRepository.updateHerd(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.service.js:46 ~ updateHerd ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteOneHerd = async (id) => {
  try {
    const result = await HerdRepository.deleteHerd(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.service.js:58 ~ deleteOneHerd ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    return err;
  }
};

const findHerdById = async (id) => {
  try {
    const result = await HerdRepository.findHerdById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.service.js:84 ~ findHerdById ~ err:", err);
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
  deleteOneHerd,
  findHerdById,
};
