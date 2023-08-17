const FoodModel = require("../database/models/Food");

const createFood = async (data) => {
  try {
    const Food = await FoodModel.create(data);
    return Food;
  } catch (err) {
    return err;
  }
};

const getAllFood = async () => {
  try {
    const Food = await FoodModel.find();
    return Food;
  } catch (err) {
    return err;
  }
};

const updateFood = async (id, data) => {
  try {
    const Food = await FoodModel.updateMany(id, data);
    return Food;
  } catch (err) {
    return err;
  }
};

const deleteFood = async (id) => {
  try {
    const Food = await FoodModel.findOneAndRemove(id);
    return Food;
  } catch (err) {
    return err;
  }
};

const findFoodById = async (id) => {
  try {
    const result = await FoodModel.findById(id);
    return result;
  } catch (err) {
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
