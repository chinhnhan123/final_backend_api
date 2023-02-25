const express = require("express");

const router = express.Router();
const StageController = require("../../controllers/Stage.controller");

router.get("/", StageController.getStage);

module.exports = router;
