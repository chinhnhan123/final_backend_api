const express = require("express");

const router = express.Router();
const FoodController = require("../../controllers/food.controller");

router.get("/", FoodController.getAllFood);

router.post("/create", FoodController.createFood);

router.put("/update/:id", FoodController.updateFood);

router.delete("/delete/:id", FoodController.deleteOneFood);
module.exports = router;
