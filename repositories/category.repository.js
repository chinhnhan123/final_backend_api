const CategoryModel = require("../database/models/Category");
const GuideRepository = require("../repositories/guide.repository");

const createCategory = async (data) => {
  try {
    const category = await CategoryModel.create(data);
    return category;
  } catch (err) {
    return err;
  }
};

const getAllCategory = async () => {
  try {
    const category = await CategoryModel.find();
    // .populate("")
    // .sort({ createdAt: -1 });
    return category;
  } catch (err) {
    console.log(
      "🚀 ~ file: category.repository.js:19 ~ getAllCategory ~ err:",
      err
    );
    return err;
  }
};

const getCategoryInGuide = async () => {
  try {
    const categoryInGuideId = await GuideRepository.getAllCategoryInGuide();
    console.log(
      "🚀 ~ file: category.repository.js:31 ~ categoryInGuide:",
      categoryInGuideId
    );
    const category = await CategoryModel.find({ _id: categoryInGuideId });
    return category;
  } catch (err) {
    console.log(
      "🚀 ~ file: category.repository.js:19 ~ getAllCategory ~ err:",
      err
    );
    return err;
  }
};

const getAllCategoriesNotInGuide = async () => {
  try {
    const categoryInGuideId = await GuideRepository.getAllCategoryInGuide();
    console.log(
      "🚀 ~ file: category.repository.js:31 ~ categoryInGuide:",
      categoryInGuideId
    );
    const category = await CategoryModel.find({
      _id: { $nin: categoryInGuideId },
    });
    return category;
  } catch (err) {
    console.log(
      "🚀 ~ file: category.repository.js:19 ~ getAllCategory ~ err:",
      err
    );
    return err;
  }
};

const updateCategory = async (id, data) => {
  try {
    const category = await CategoryModel.updateMany({ _id: id }, data);
    return category;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.repository.js:32 ~ updateCategory ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );

    return err;
  }
};

const deleteCategory = async (id) => {
  try {
    const category = await CategoryModel.findOneAndRemove({ _id: id });
    return category;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.repository.js:52 ~ deleteCategory ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    return err;
  }
};

const findCategoryById = async (id) => {
  try {
    const result = await CategoryModel.findOne({ _id: id });
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  findCategoryById,
  getCategoryInGuide,
  getAllCategoriesNotInGuide,
};
