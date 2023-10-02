const StageRepository = require("../repositories/stage.repository");

const getStage = async () => {
  try {
    const result = await StageRepository.getStage();
    return result;
  } catch (err) {
    console.log("🚀 ----------------------------------------------------🚀");
    console.log("🚀 ~ file: stage.service.js:8 ~ getStage ~ err:", err);
    console.log("🚀 ----------------------------------------------------🚀");
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  getStage,
};
