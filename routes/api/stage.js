const express = require("express");

const router = express.Router();
const StageController = require("../../controllers/Stage.controller");

// get all stage swagger
/**
 * @swagger
 * tags:
 *   name: Stage
 *   description: The Stage managing API
 * /stage:
 *   get:
 *     summary: Get all stages.
 *     description: Retrieve a list of all stages.
 *     tags: [Stage]
 *     responses:
 *       200:
 *         description: A list of stages.
 *       500:
 *         description: Internal server error.
 */

router.get("/", StageController.getStage);

module.exports = router;
