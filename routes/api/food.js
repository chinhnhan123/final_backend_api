const express = require("express");
const multer = require("multer");

const router = express.Router();
const FoodController = require("../../controllers/food.controller");
const upload = multer({ dest: "public/uploads/" });

router.get("/", FoodController.getAllFood);

router.get("/:id", FoodController.findFoodById);

router.post("/", upload.single("file"), FoodController.createFood);

router.patch("/:id", upload.single("file"), FoodController.updateFood);

router.delete("/:id", FoodController.deleteOneFood);

module.exports = router;
