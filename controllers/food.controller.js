const FoodService = require("../services/food.service");

const getAllFood = async (req, res) => {
  try {
    const food = await FoodService.getAllFood();
    res.send(food);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: food.controller.js:8 ~ getAllFood ~ error:", error);
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const findFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    const Food = await FoodService.findFoodById(id);
    res.send(Food);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Food.controller.js:22 ~ findFoodByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createFood = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const Food = await FoodService.createFood(req.body);
    if (!Food) return res.sendStatus(500);
    return res.status(200).send(Food);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Food.controller.js:43 ~ createFood ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const deleteOneFood = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteFood = await FoodService.deleteOneFood(req.params.id);
    if (!deleteFood) return res.sendStatus(500);
    return res.status(200).send(deleteFood);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Food.controller.js:64 ~ deleteOneFood ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateFood = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateFood = await BookServices.updateFood(req.params.id, req.body);
    return res.status(200).send(updateFood);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Food.controller.js:90 ~ updateFood ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  createFood,
  getAllFood,
  updateFood,
  deleteOneFood,
  findFoodById,
};
