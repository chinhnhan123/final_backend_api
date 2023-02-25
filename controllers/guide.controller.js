const GuideService = require("../services/Guide.service");

const getAllGuide = async (req, res) => {
  try {
    const Guide = await GuideService.getAllGuide();
    res.send(Guide);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Guide.controller.js:8 ~ getAllGuide ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const findGuideById = async (req, res) => {
  try {
    const id = req.params.id;
    const Guide = await GuideService.findGuideById(id);
    res.send(Guide);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Guide.controller.js:22 ~ findGuideByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createGuide = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const Guide = await GuideService.createGuide(req.body);
    if (!Guide) return res.sendStatus(500);
    return res.status(200).send(Guide);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Guide.controller.js:43 ~ createGuide ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const deleteOneGuide = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteGuide = await GuideService.deleteOneGuide(req.params.id);
    if (!deleteGuide) return res.sendStatus(500);
    return res.status(200).send(deleteGuide);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Guide.controller.js:64 ~ deleteOneGuide ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateGuide = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateGuide = await BookServices.updateGuide(req.params.id, req.body);
    return res.status(200).send(updateGuide);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Guide.controller.js:90 ~ updateGuide ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

const findGuideByCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const Guide = await GuideService.findGuideByCategory(id);
    res.send(Guide);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: guide.controller.js:110 ~ findGuideByCategory ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

module.exports = {
  createGuide,
  getAllGuide,
  updateGuide,
  deleteOneGuide,
  findGuideById,
  findGuideByCategory,
};
