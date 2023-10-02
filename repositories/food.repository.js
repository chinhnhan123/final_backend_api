const FoodModel = require("../database/models/Food");

const createFood = async (data) => {
  try {
    const Food = await FoodModel.create(data);
    return Food;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const getAllFood = async () => {
  try {
    const Food = await FoodModel.find();
    return Food;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const updateFood = async (id, data) => {
  try {
    const Food = await FoodModel.updateMany({ _id: id }, data);
    return Food;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const deleteFood = async (id) => {
  try {
    const Food = await FoodModel.findOneAndRemove({ _id: id });
    return Food;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

const findFoodById = async (id) => {
  try {
    const result = await FoodModel.findById({ _id: id });
    return result;
  } catch (err) {
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createFood,
  getAllFood,
  updateFood,
  deleteFood,
  findFoodById,
};
