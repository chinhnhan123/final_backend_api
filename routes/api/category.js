const express = require("express");

const router = express.Router();
const CategoryController = require("../../controllers/category.controller");

router.get("/", CategoryController.getAllCategory);

router.post("/create", CategoryController.createCategory);

router.put("/update/:id", CategoryController.updateCategory);

router.delete("/delete/:id", CategoryController.deleteOneCategory);

module.exports = router;
