const StageService = require("../services/stage.service");

const getStage = async (req, res) => {
  try {
    const categories = await StageService.getStage();
    res.send(categories);
  } catch (error) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: stage.controller.js:8 ~ getStage ~ error:", error);
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

module.exports = {
  getStage,
};
