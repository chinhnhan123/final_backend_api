const express = require("express");
const multer = require("multer");

const router = express.Router();
const MedicineController = require("../../controllers/medicine.controller");
const upload = multer({ dest: "public/uploads/" });

router.get("/", MedicineController.getAllMedicine);

router.post("/", upload.single("file"), MedicineController.createMedicine);

router.put("/:id", MedicineController.updateMedicine);

router.delete("/:id", MedicineController.deleteOneMedicine);

module.exports = router;
