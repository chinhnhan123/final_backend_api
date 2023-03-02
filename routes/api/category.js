const express = require("express");

const router = express.Router();
const CategoryController = require("../../controllers/category.controller");

router.get("/", CategoryController.getAllCategory);

router.post("/", CategoryController.createCategory);

router.put("/:id", CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteOneCategory);

module.exports = router;
