const express = require("express");

const router = express.Router();
const GuideController = require("../../controllers/guide.controller");

router.get("/", GuideController.getAllGuide);

router.post("/create", GuideController.createGuide);

router.put("/update/:id", GuideController.updateGuide);

router.delete("/delete/:id", GuideController.deleteOneGuide);

module.exports = router;
