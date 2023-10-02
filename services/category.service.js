const CategoryRepository = require("../repositories/category.repository");

const createCategory = async (data, res) => {
  try {
    const result = await CategoryRepository.createCategory(data);
    return result;
  } catch (err) {
    if (err.status === 500) {
      return res.status(500).json({ message: err.message, status: 500 });
    }
    console.log("🚀 ~ file err:", err);
  }
};

const getAllCategory = async () => {
  try {
    const result = await CategoryRepository.getAllCategory();
    return result;
  } catch (err) {
    console.log(
      "🚀 ~ file: category.service.js:27 ~ getAllCategory ~ err:",
      err
    );

    console.log("🚀 ~ file err:", err);
  }
};

const getCategoryInGuide = async () => {
  try {
    const result = await CategoryRepository.getCategoryInGuide();
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const getAllCategoriesNotInGuide = async () => {
  try {
    const result = await CategoryRepository.getAllCategoriesNotInGuide();
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateCategory = async (id, data) => {
  try {
    const result = await CategoryRepository.updateCategory(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 ~ file: category.service.js:46 ~ updateCategory ~ err:",
      err
    );

    console.log("🚀 ~ file err:", err);
  }
};

const deleteOneCategory = async (id) => {
  try {
    const result = await CategoryRepository.deleteCategory(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.service.js:58 ~ deleteOneCategory ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const findCategoryById = async (id) => {
  try {
    const result = await CategoryRepository.findCategoryById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.service.js:84 ~ findCategoryById ~ err:",
      err
    );
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteOneCategory,
  findCategoryById,
  getCategoryInGuide,
  getAllCategoriesNotInGuide,
};
