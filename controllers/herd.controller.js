const HerdService = require("../services/herd.service");

const getAllHerd = async (req, res) => {
  try {
    const Herd = await HerdService.getAllHerd();
    res.send(Herd);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Herd.controller.js:8 ~ getAllHerd ~ error:", error);
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const findHerdById = async (req, res) => {
  try {
    const id = req.params.id;
    const Herd = await HerdService.findHerdById(id);
    res.send(Herd);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Herd.controller.js:22 ~ findHerdByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createHerd = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const Herd = await HerdService.createHerd(req.body);
    if (!Herd) return res.sendStatus(500);
    return res.status(200).send(Herd);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Herd.controller.js:43 ~ createHerd ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const deleteOneHerd = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteHerd = await HerdService.deleteOneHerd(req.params.id);
    if (!deleteHerd) return res.sendStatus(500);
    return res.status(200).send(deleteHerd);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Herd.controller.js:64 ~ deleteOneHerd ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateHerd = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const updateHerd = await BookServices.updateHerd(req.params.id, req.body);
    return res.status(200).send(updateHerd);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Herd.controller.js:90 ~ updateHerd ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  createHerd,
  getAllHerd,
  updateHerd,
  deleteOneHerd,
  findHerdById,
};
