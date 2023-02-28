const express = require("express");

const router = express.Router();
const StageController = require("../../controllers/Stage.controller");

router.get("/", StageController.getStage);

router.post("/create", StageController.createStage);

router.put("/update/:id", StageController.updateStage);

router.delete("/delete/:id", StageController.deleteOneStage);
module.exports = router;
