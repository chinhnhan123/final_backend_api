const express = require("express");

const router = express.Router();
const GuideController = require("../../controllers/guide.controller");

router.get("/", GuideController.getAllGuide);

router.post("/", GuideController.createGuide);

router.put("/:id", GuideController.updateGuide);

router.delete("/:id", GuideController.deleteOneGuide);

module.exports = router;
