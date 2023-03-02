const express = require("express");

const router = express.Router();
const FoodController = require("../../controllers/food.controller");

router.get("/", FoodController.getAllFood);

router.post("/", FoodController.createFood);

router.put("/:id", FoodController.updateFood);

router.delete("/:id", FoodController.deleteOneFood);
module.exports = router;
