const express = require("express");

const router = express.Router();
const MedicineController = require("../../controllers/Medicine.controller");

router.get("/", MedicineController.getAllMedicine);
// router.post("/", RoleController.createRole);

module.exports = router;
