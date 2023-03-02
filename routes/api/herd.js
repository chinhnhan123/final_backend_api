const express = require("express");

const router = express.Router();
const HerdController = require("../../controllers/Herd.controller");

router.get("/", HerdController.getAllHerd);

router.post("/", HerdController.createHerd);

router.put("/:id", HerdController.updateHerd);

router.delete("/:id", HerdController.deleteOneHerd);

module.exports = router;
