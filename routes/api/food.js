const express = require("express");
const multer = require("multer");

const router = express.Router();
const FoodController = require("../../controllers/food.controller");
const upload = multer({ dest: "public/uploads/" });

router.get("/", FoodController.getAllFood);

router.post("/", upload.single("file"), FoodController.createFood);

router.put("/:id", FoodController.updateFood);

router.delete("/:id", FoodController.deleteOneFood);
module.exports = router;
