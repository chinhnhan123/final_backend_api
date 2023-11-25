const express = require("express");
const multer = require("multer");

const router = express.Router();
const FoodController = require("../../controllers/food.controller");
const upload = multer({ dest: "public/uploads/" });

// get all food swagger
/**
 * @swagger
 * tags:
 *   name: Food
 *   description: The Food managing API
 * /food:
 *   get:
 *     summary: Get all foods.
 *     description: Retrieve a list of all foods.
 *     tags: [Food]
 *     responses:
 *       200:
 *         description: A list of foods.
 *       500:
 *         description: Internal server error.
 */

router.get("/", FoodController.getAllFood);

// get food by id swagger
/**
 * @swagger
 * tags:
 *   name: Food
 *   description: The Food managing API
 * /food/{id}:
 *   get:
 *     summary: Get a food by ID.
 *     description: Retrieve a single food with a given id.
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The food id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A food object
 *       404:
 *         description: The food was not found
 *       500:
 *         description: Internal server error
 */

router.get("/:id", FoodController.findFoodById);

// post food swagger
/**
 * @swagger
 * tags:
 *   name: Food
 *   description: The Food managing API
 * /food:
 *   post:
 *     summary: Create a new food.
 *     description: Create a new food.
 *     tags: [Food]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                price:
 *                  type: number
 *                description:
 *                  type: string
 *                categoryId:
 *                  type: string
 *                file:
 *                  type: string
 *                  format: binary
 *     responses:
 *       200:
 *         description: The food was created successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", upload.single("file"), FoodController.createFood);

// update food swagger
/**
 * @swagger
 * tags:
 *   name: Food
 *   description: The Food managing API
 * /food/{id}:
 *   patch:
 *     summary: Update the food by id.
 *     description: Update the food by id.
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The food id
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
 *                price:
 *                  type: number
 *                description:
 *                  type: string
 *                categoryId:
 *                  type: string
 *                file:
 *                  type: string
 *                  format: binary
 *     responses:
 *       200:
 *         description: The food was updated successfully
 *       404:
 *         description: The food was not found
 *       500:
 *         description: Internal server error
 */

router.patch("/:id", upload.single("file"), FoodController.updateFood);

// delete food swagger
/**
 * @swagger
 * tags:
 *   name: Food
 *   description: The Food managing API
 * /food/{id}:
 *   delete:
 *     summary: Delete the food by id.
 *     description: Delete the food by id.
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The food id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The food was deleted successfully
 *       404:
 *         description: The food was not found
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", FoodController.deleteOneFood);

module.exports = router;
