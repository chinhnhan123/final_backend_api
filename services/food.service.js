const FoodRepository = require("../repositories/food.repository");

const createFood = async (data) => {
  try {
    const result = await FoodRepository.createFood(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log("🚀 ~ file: food.service.js:8 ~ createFood ~ err:", err);
    console.log("🚀 -----------------------------------------------------🚀");

    return err;
  }
};

const getAllFood = async () => {
  try {
    const result = await FoodRepository.getAllFood();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Food.service.js:27 ~ getAllFood ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateFood = async (id, data) => {
  try {
    const result = await FoodRepository.updateFood(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Food.service.js:46 ~ updateFood ~ err:", err);
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteOneFood = async (id) => {
  try {
    const result = await FoodRepository.deleteFood(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Food.service.js:58 ~ deleteOneFood ~ err:", err);
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    return err;
  }
};

const findFoodById = async (id) => {
  try {
    const result = await FoodRepository.findFoodById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Food.service.js:84 ~ findFoodById ~ err:", err);
    console.log(
      "🚀 ------------------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createFood,
  getAllFood,
  updateFood,
  deleteOneFood,
  findFoodById,
};
