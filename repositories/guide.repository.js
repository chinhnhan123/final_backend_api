const GuideModel = require("../database/models/guide");

const createGuide = async (data) => {
  try {
    const Guide = await GuideModel.create(data);
    return Guide;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.repository.js:8 ~ createGuide ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    return err;
  }
};

const getAllGuide = async () => {
  try {
    const Guide = await GuideModel.find().populate([
      {
        path: "idCategory",
        select: "_id nameCategory",
      },
      {
        path: "idStage",
        select: "_id nameStage",
      },
      {
        path: "idFood",
        select: "_id nameFood",
      },
      {
        path: "idMedicine",
        select: "_id nameMedicine",
      },
    ]);

    console.log(Guide);
    return Guide;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.repository.js:26 ~ getAllGuide ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateGuide = async (id, data) => {
  try {
    const Guide = await GuideModel.updateOne(id, data);
    return Guide;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.repository.js:40 ~ updateGuide ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteGuide = async (id) => {
  try {
    const Guide = await GuideModel.findOneAndRemove(id);
    return Guide;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Guide.repository.js:50 ~ deleteGuide ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    return err;
  }
};

const findGuideByCategory = async (id) => {
  try {
    const result = await GuideModel.findOne({ idCategory: id });
    return result;
  } catch (err) {
    console.log(
      "🚀 -------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: guide.repository.js:73 ~ findGuideByCategory ~ err:",
      err
    );
    console.log(
      "🚀 -------------------------------------------------------------------🚀"
    );
    return err;
  }
};
const findGuideById = async (id) => {
  try {
    const result = await GuideModel.findById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Guide.repository.js:67 ~ findGuideById ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------🚀"
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
