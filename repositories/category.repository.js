const CategoryModel = require("../database/models/Category");

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

const updateCategory = async (id, data) => {
  try {
    const category = await CategoryModel.updateMany(id, data);
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
    const category = await CategoryModel.findOneAndRemove(id);
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

const findCategoryByName = async (name) => {
  try {
    const result = await CategoryModel.findOne({ nameCategory: name });
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
  findCategoryByName,
};
