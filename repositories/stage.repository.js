const StageModel = require("../database/models/Stage");

const getStage = async () => {
  try {
    const category = await StageModel.find();
    return category;
  } catch (err) {
    console.log("🚀 -------------------------------------------------------🚀");
    console.log("🚀 ~ file: stage.repository.js:8 ~ getStage ~ err:", err);
    console.log("🚀 -------------------------------------------------------🚀");
    return err;
  }
};

module.exports = {
  getStage,
};
