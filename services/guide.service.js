const GuideRepository = require("../repositories/guide.repository");

const createGuide = async (data) => {
  try {
    let stagePig1 = "63f8826f88b9234c3f746eef";
    let stagePig2 = "63f8826f88b9234c3f746ef0";
    let stagePig3 = "63f8826f88b9234c3f746ef1";
    const addStage1 = data.stage1;
    addStage1.idStage = stagePig1;
    const addStage2 = data.stage2;
    addStage2.idStage = stagePig2;
    const addStage3 = data.stage3;
    addStage3.idStage = stagePig3;

    const listData = [];
    const payload = { addStage1, addStage2, addStage3 };
    listData.push(payload.addStage1);
    listData.push(payload.addStage2);
    listData.push(payload.addStage3);

    const result = await GuideRepository.createGuide(listData);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: Guide.service.js:8 ~ createGuide ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");

    return err;
  }
};

const getAllCategoryInGuide = async () => {
  try {
    const result = await GuideRepository.getAllCategoryInGuide();
    return result;
  } catch (err) {
    console.log("🚀 ~ file: guide.service.js:37 ~ err:", err);
    return err;
  }
};

const getAllGuide = async () => {
  try {
    const result = await GuideRepository.getAllGuide();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.service.js:27 ~ getAllGuide ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateGuide = async (data) => {
  try {
    const result = await GuideRepository.updateGuide(data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.service.js:46 ~ updateGuide ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteGuide = async (id) => {
  try {
    const result = await GuideRepository.deleteGuide(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.service.js:58 ~ deleteOneGuide ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    return err;
  }
};

const findGuideById = async (id) => {
  try {
    const result = await GuideRepository.findGuideById(id);
    return result;
  } catch (err) {
    return err;
  }
};
const findGuideByCategory = async (id) => {
  try {
    const result = await GuideRepository.findGuideByCategory(id);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createGuide,
  getAllGuide,
  updateGuide,
  deleteGuide,
  findGuideById,
  findGuideByCategory,
  getAllCategoryInGuide,
};
