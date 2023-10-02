const GuideModel = require("../database/models/Guide");

const createGuide = async (data) => {
  try {
    console.log(data);
    const Guide = await GuideModel.insertMany(data);
    console.log("Success");
    return Guide;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const getAllCategoryInGuide = async () => {
  try {
    const Guide = GuideModel.distinct("idCategory");
    return Guide;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
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
        select: "_id idStage nameStage",
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
    return Guide;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateGuide = async (data) => {
  try {
    for (const id in data) {
      const dataToUpdate = data[id];
      var result = await GuideModel.updateOne(
        { _id: id },
        { $set: dataToUpdate }
      );
      console.log(`Updated guide with id ${id}`);
    }
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const deleteGuide = async (id) => {
  try {
    const Guide = await GuideModel.findOneAndRemove({ _id: id });
    return Guide;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const findGuideByCategory = async (id) => {
  try {
    const result = await GuideModel.find({ idCategory: id }).populate([
      {
        path: "idCategory",
        select: "_id nameCategory description",
      },
      {
        path: "idStage",
        select: "_id idStage nameStage description",
      },
      {
        path: "idFood",
        select: "_id nameFood urlImage description",
      },
      {
        path: "idMedicine",
        select: "_id nameMedicine types description instruction urlImage",
      },
    ]);
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const findGuideById = async (id) => {
  try {
    const result = await GuideModel.findById({ _id: id });
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
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
