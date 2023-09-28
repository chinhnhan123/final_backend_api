const express = require("express");

const router = express.Router();
const GuideController = require("../../controllers/guide.controller");

router.get("/:categoryId", GuideController.findGuideByCategory);

router.get("/categories/find", GuideController.getAllCategoryInGuide);

router.post("/", GuideController.createGuide);

router.put("/", GuideController.updateGuide);

router.delete("/:id", GuideController.deleteOneGuide);

module.exports = router;
