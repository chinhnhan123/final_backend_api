const FoodModel = require("../database/models/Food");

const createFood = async (data) => {
  try {
    const Food = await FoodModel.create(data);
    return Food;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: food.repository.js:8 ~ createFood ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    return err;
  }
};

const getAllFood = async () => {
  try {
    const Food = await FoodModel.find();
    return Food;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: food.repository.js:26 ~ getAllFood ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateFood = async (id, data) => {
  try {
    const Food = await FoodModel.updateMany(id, data);
    return Food;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: food.repository.js:40 ~ updateFood ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteFood = async (id) => {
  try {
    const Food = await FoodModel.findOneAndRemove(id);
    return Food;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: food.repository.js:50 ~ deleteFood ~ err:", err);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    return err;
  }
};

const findFoodById = async (id) => {
  try {
    const result = await FoodModel.findById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: food.repository.js:67 ~ findFoodById ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createFood,
  getAllFood,
  updateFood,
  deleteFood,
  findFoodById,
};
