const express = require("express");
const multer = require("multer");

const router = express.Router();
const HerdController = require("../../controllers/Herd.controller");
const upload = multer({ dest: "public/uploads/" });

// get all herd swagger
/**
 * @swagger
 * tags:
 *   name: Herd
 *   description: The Herd managing API
 * /herd:
 *   get:
 *     summary: Get all herds.
 *     description: Retrieve a list of all herds.
 *     tags: [Herd]
 *     responses:
 *       200:
 *         description: A list of herds.
 *       500:
 *         description: Internal server error.
 */

router.get("/", HerdController.getAllHerd);

// get all herd by accountId swagger
/**
 * @swagger
 * tags:
 *   name: Herd
 *   description: The Herd managing API
 * /herd/by-account/{idAccount}:
 *   get:
 *     summary: Get all herds by accountId.
 *     description: Retrieve a list of all herds by accountId.
 *     tags: [Herd]
 *     responses:
 *       200:
 *         description: A list of herds by accountId.
 *       500:
 *         description: Internal server error.
 */

router.get("/by-account/:idAccount", HerdController.getAllHerdByAccountId);

// get herd by id swagger
/**
 * @swagger
 * tags:
 *   name: Herd
 *   description: The Herd managing API
 * /herd/{id}:
 *   get:
 *     summary: Get a herd by ID.
 *     description: Retrieve a single herd with a given id.
 *     tags: [Herd]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The herd id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A herd object
 *       404:
 *         description: The herd was not found
 *       500:
 *         description: Internal server error
 */

router.get("/:id", HerdController.findHerdById);

// post herd swagger
/**
 * @swagger
 * tags:
 *   name: Herd
 *   description: The Herd managing API
 * /herd:
 *   post:
 *     summary: Create a new herd.
 *     description: Create a new herd.
 *     tags: [Herd]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                accountId:
 *                  type: string
 *                file:
 *                  type: string
 *                  format: binary
 *     responses:
 *       200:
 *         description: The herd was created successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", upload.single("file"), HerdController.createHerd);

// patch herd swagger
/**
 * @swagger
 * tags:
 *   name: Herd
 *   description: The Herd managing API
 * /herd/{id}:
 *   patch:
 *     summary: Update herd by id.
 *     description: Update herd by id.
 *     tags: [Herd]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The herd id
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                description:
 *                  type: string
 *                accountId:
 *                  type: string
 *                file:
 *                  type: string
 *                  format: binary
 *     responses:
 *       200:
 *         description: The herd was updated successfully
 *       404:
 *         description: The herd was not found
 *       500:
 *         description: Internal server error
 */

router.patch("/:id", upload.single("file"), HerdController.updateHerd);

// delete herd swagger
/**
 * @swagger
 * tags:
 *   name: Herd
 *   description: The Herd managing API
 * /herd/{id}:
 *   delete:
 *     summary: Delete a herd.
 *     description: Delete a herd.
 *     tags: [Herd]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The herd id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The herd was deleted successfully
 *       404:
 *         description: The herd was not found
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", HerdController.deleteOneHerd);

module.exports = router;
