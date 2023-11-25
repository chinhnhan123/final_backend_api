const express = require("express");

const router = express.Router();
const GuideController = require("../../controllers/guide.controller");

// get  guide by categoryId swagger
/**
 * @swagger
 * tags:
 *   name: Guide
 *   description: The Guide managing API
 * /guide/{categoryId}:
 *   get:
 *     summary: Get all guides.
 *     description: Retrieve a list of all guides.
 *     tags: [Guide]
 *     responses:
 *       200:
 *         description: A list of guides.
 *       500:
 *         description: Internal server error.
 */

router.get("/:categoryId", GuideController.findGuideByCategory);

// get all guide in guide swagger
/**
 * @swagger
 * tags:
 *   name: Guide
 *   description: The Guide managing API
 * /guide:
 *   get:
 *     summary: Get all guides.
 *     description: Retrieve a list of all guides.
 *     tags: [Guide]
 *     responses:
 *       200:
 *         description: A list of guides.
 *       500:
 *         description: Internal server error.
 */

router.get("/categories/find", GuideController.getAllCategoryInGuide);

// post guide swagger
/**
 * @swagger
 * tags:
 *   name: Guide
 *   description: The Guide managing API
 * /guide:
 *   post:
 *     summary: Create a new guide.
 *     description: Create a new guide.
 *     tags: [Guide]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                categoryId:
 *                  type: string
 *                title:
 *                  type: string
 *                content:
 *                  type: string
 *                image:
 *                  type: string
 *     responses:
 *       200:
 *         description: The guide was created successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", GuideController.createGuide);

// update guide swagger
/**
 * @swagger
 * tags:
 *   name: Guide
 *   description: The Guide managing API
 * /guide:
 *   put:
 *     summary: Update a guide.
 *     description: Update a guide.
 *     tags: [Guide]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                id:
 *                  type: string
 *                categoryId:
 *                  type: string
 *                title:
 *                  type: string
 *                content:
 *                  type: string
 *                image:
 *                  type: string
 *     responses:
 *       200:
 *         description: The guide was updated successfully
 *       500:
 *         description: Internal server error
 */

router.put("/", GuideController.updateGuide);

// delete guide swagger
/**
 * @swagger
 * tags:
 *   name: Guide
 *   description: The Guide managing API
 * /guide/{id}:
 *   delete:
 *     summary: Delete a guide.
 *     description: Delete a guide.
 *     tags: [Guide]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Guide id
 *     responses:
 *       200:
 *         description: The guide was deleted successfully
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", GuideController.deleteOneGuide);

module.exports = router;
