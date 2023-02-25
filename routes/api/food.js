const express = require("express");

const router = express.Router();
const FoodController = require("../../controllers/food.controller");

router.get("/", FoodController.getAllFood);
// router.post("/", RoleController.createRole);

module.exports = router;
