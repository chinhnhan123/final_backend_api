const GuideRepository = require("../repositories/guide.repository");

const createGuide = async (data) => {
  try {
    const result = await GuideRepository.createGuide(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: Guide.service.js:8 ~ createGuide ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");

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

const updateGuide = async (id, data) => {
  try {
    const result = await GuideRepository.updateGuide(id, data);
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
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.service.js:84 ~ findGuideById ~ err:", err);
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    return err;
  }
};
const findGuideByCategory = async (id) => {
  try {
    const result = await GuideRepository.findGuideById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.service.js:84 ~ findGuideById ~ err:", err);
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
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
};
