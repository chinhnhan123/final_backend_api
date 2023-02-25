const express = require("express");

const router = express.Router();
const GuideController = require("../../controllers/guide.controller");

router.get("/", GuideController.getAllGuide);
router.post("/create", GuideController.createGuide);

module.exports = router;
