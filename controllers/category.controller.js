const CategoryService = require("../services/category.service");

const getAllCategory = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategory();
    res.send(categories);
  } catch (error) {
    console.log(
      "🚀 ~ file: category.controller.js:8 ~ getAllCategory ~ error:",
      error
    );
    res.sendStatus(500);
  }
};

const findCategoryByName = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await CategoryService.findCategoryByName(id);
    res.send(category);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.controller.js:22 ~ findCategoryByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createCategory = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const category = await CategoryService.createCategory(req.body);
    if (!category) return res.sendStatus(500);
    return res.status(200).send(category);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.controller.js:43 ~ createCategory ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const deleteOneCategory = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteCategory = await CategoryService.deleteOneCategory(
      req.params.id
    );
    if (!deleteCategory) return res.sendStatus(500);
    return res.status(200).send("deletebook successful!!!!!");
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.controller.js:64 ~ deleteOneCategory ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateCategory = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updatecategory = await BookServices.updateCategory(
      req.params.id,
      req.body
    );
    return res.status(200).send("update category successful");
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: category.controller.js:90 ~ updateCategory ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteOneCategory,
  findCategoryByName,
};
