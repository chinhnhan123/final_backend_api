const express = require("express");

const router = express.Router();
const CategoryController = require("../controllers/category.controller");

router.get("/", CategoryController.getAllCategory);
// router.post("/", RoleController.createRole);

module.exports = router;
