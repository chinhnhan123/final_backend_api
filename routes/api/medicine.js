const express = require("express");

const router = express.Router();
const MedicineController = require("../../controllers/Medicine.controller");

router.get("/", MedicineController.getAllMedicine);

router.post("/create", MedicineController.createMedicine);

router.put("/update/:id", MedicineController.updateMedicine);

router.delete("/delete/:id", MedicineController.deleteOneMedicine);

module.exports = router;
