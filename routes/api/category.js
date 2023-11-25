const express = require("express");

const router = express.Router();
const CategoryController = require("../../controllers/category.controller");

// get all category swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category:
 *   get:
 *     summary: Get all categories.
 *     description: Retrieve a list of all categories.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories.
 *       500:
 *         description: Internal server error.
 */

router.get("/", CategoryController.getAllCategory);

// get all category in guide swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category-in-guide:
 *   get:
 *     summary: Get all categories in guide.
 *     description: Retrieve a list of all categories in guide.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories in guide.
 *       500:
 *         description: Internal server error.
 */

router.get("/category-in-guide", CategoryController.getCategoryInGuide);

// get all category not in guide swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category-not-in-guide:
 *   get:
 *     summary: Get all categories not in guide.
 *     description: Retrieve a list of all categories not in guide.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories not in guide.
 *       500:
 *         description: Internal server error.
 */

router.get(
  "/category-not-in-guide",
  CategoryController.getAllCategoriesNotInGuide
);

// get category by id swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category/{id}:
 *   get:
 *     summary: Get category by id.
 *     description: Retrieve a category by id.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category id
 *     responses:
 *       200:
 *         description: A category object
 *       500:
 *         description: Internal server error.
 */

router.get("/:id", CategoryController.findCategoryById);

// create category swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category:
 *   post:
 *     summary: Create new category.
 *     description: Create new category.
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *     responses:
 *       200:
 *         description: The category was created successfully
 *       500:
 *         description: Internal server error
 */

router.post("/", CategoryController.createCategory);

// update category swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category/{id}:
 *   put:
 *     summary: Update category.
 *     description: Update category.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *     responses:
 *       200:
 *         description: The category was updated successfully
 *       500:
 *         description: Internal server error
 */

router.put("/:id", CategoryController.updateCategory);

// delete category swagger
/**
 * @swagger
 * tags:
 *   name: Category
 *   description: The Category managing API
 * /category/{id}:
 *   delete:
 *     summary: Delete category.
 *     description: Delete category.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category id
 *     responses:
 *       200:
 *         description: The category was deleted successfully
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", CategoryController.deleteOneCategory);

module.exports = router;
