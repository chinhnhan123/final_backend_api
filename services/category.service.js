const CategoryRepository = require("../repositories/category.repository");

const createCategory = async (data) => {
  try {
    const result = await CategoryRepository.createCategory(data);
    return result;
  } catch (err) {
    console.log(
      "🚀 -------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.service.js:8 ~ createCategory ~ err:",
      err
    );
    console.log(
      "🚀 -------------------------------------------------------------🚀"
    );
    return err;
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

    return err;
  }
};

const getCategoryInGuide = async () => {
  try {
    const result = await CategoryRepository.getCategoryInGuide();
    return result;
  } catch (err) {
    return err;
  }
};

const getAllCategoriesNotInGuide = async () => {
  try {
    const result = await CategoryRepository.getAllCategoriesNotInGuide();
    return result;
  } catch (err) {
    return err;
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

    return err;
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
    return err;
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
    return err;
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
