const express = require("express");
const multer = require("multer");

const router = express.Router();
const HerdController = require("../../controllers/Herd.controller");
const upload = multer({ dest: "public/uploads/" });

router.get("/", HerdController.getAllHerd);

router.get("/by-account/:idAccount", HerdController.getAllHerdByAccountId);

router.get("/:id", HerdController.findHerdById);

router.post("/", upload.single("file"), HerdController.createHerd);

router.patch("/:id", upload.single("file"), HerdController.updateHerd);

router.delete("/:id", HerdController.deleteOneHerd);

module.exports = router;
