const express = require("express");

const router = express.Router();
const MedicineController = require("../../controllers/Medicine.controller");

router.get("/", MedicineController.getAllMedicine);

router.post("/", MedicineController.createMedicine);

router.put("/:id", MedicineController.updateMedicine);

router.delete("/:id", MedicineController.deleteOneMedicine);

module.exports = router;
