const FoodService = require("../services/food.service");
const handleUploadImage = require("../utilities/uploadImage");
const getAllFood = async (req, res) => {
  try {
    const food = await FoodService.getAllFood();
    res.send(food);
  } catch (error) {
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
    const { nameFood, description } = req.body;
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    }
    const payload = {
      nameFood,
      description,
      urlImage: img,
    };
    const Food = await FoodService.createFood(payload);
    if (!Food) return res.sendStatus(500);
    return res.status(200).send(Food);
  } catch (error) {
    console.log(
      "🚀 ~ file: food.controller.js:67 ~ createFood ~ error:",
      error
    );
    res.sendStatus(500);
  }
};

const updateFood = async (req, res) => {
  try {
    if (!req.params.id || !req.body) return res.sendStatus(400);
    const { nameFood, description } = req.body;
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    } else {
      img = req.body.img;
    }
    const payload = {
      nameFood,
      description,
      urlImage: img,
    };
    const updateFood = await FoodService.updateFood(req.params.id, payload);
    return res.status(200).send(updateFood);
  } catch (error) {
    console.log(
      "🚀 ~ file: food.controller.js:73 ~ updateFood ~ error:",
      error
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
    res.sendStatus(500);
  }
};

module.exports = {
  createFood,
  getAllFood,
  updateFood,
  deleteOneFood,
  findFoodById,
};
