const express = require("express");
const multer = require("multer");

const router = express.Router();
const MedicineController = require("../../controllers/medicine.controller");
const upload = multer({ dest: "public/uploads/" });

// get all medicine swagger
/**
 * @swagger
 * tags:
 *   name: Medicine
 *   description: The Medicine managing API
 * /medicine:
 *   get:
 *     summary: Get all medicines.
 *     description: Retrieve a list of all medicines.
 *     tags: [Medicine]
 *     responses:
 *       200:
 *         description: A list of medicines.
 *       500:
 *         description: Internal server error.
 */

router.get("/", MedicineController.getAllMedicine);

// get medicine by id swagger
/**
 * @swagger
 * tags:
 *   name: Medicine
 *   description: The Medicine managing API
 * /medicine/{id}:
 *   get:
 *     summary: Get a medicine by ID.
 *     description: Retrieve a single medicine with a given id.
 *     tags: [Medicine]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The medicine id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A medicine object
 *       404:
 *         description: The medicine was not found
 *       500:
 *         description: Internal server error
 */

router.get("/:id", MedicineController.findMedicineById);

// post medicine swagger
/**
 * @swagger
 * tags:
 *   name: Medicine
 *   description: The Medicine managing API
 * /medicine:
 *   post:
 *     summary: Create a new medicine.
 *     description: Create a new medicine.
 *     tags: [Medicine]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The medicine name
 *               description:
 *                 type: string
 *                 description: The medicine description
 *               price:
 *                 type: number
 *                 description: The medicine price
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The medicine image
 *     responses:
 *       200:
 *         description: A medicine object
 *       500:
 *         description: Internal server error
 */

router.post("/", upload.single("file"), MedicineController.createMedicine);

// update medicine swagger
/**
 * @swagger
 * tags:
 *   name: Medicine
 *   description: The Medicine managing API
 * /medicine:
 *   put:
 *     summary: Update a medicine.
 *     description: Update a medicine.
 *     tags: [Medicine]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                id:
 *                  type: string
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                price:
 *                  type: number
 *                file:
 *                  type: string
 *                  format: binary
 *     responses:
 *       200:
 *         description: The medicine was updated successfully
 *       404:
 *         description: The medicine was not found
 *       500:
 *         description: Internal server error
 */

router.put("/:id", upload.single("file"), MedicineController.updateMedicine);

// delete medicine swagger
/**
 * @swagger
 * tags:
 *   name: Medicine
 *   description: The Medicine managing API
 * /medicine/{id}:
 *   delete:
 *     summary: Remove a medicine by id.
 *     description: Remove a medicine by id.
 *     tags: [Medicine]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The medicine id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The medicine was deleted successfully
 *       404:
 *         description: The medicine was not found
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", MedicineController.deleteOneMedicine);

module.exports = router;
