const HerdService = require("../services/herd.service");
const handleUploadImage = require("../utilities/uploadImage");

const getAllHerd = async (req, res) => {
  try {
    const { page = 1, limit = 10, searchTerm = "" } = req.query;
    const options = { page, limit };
    const Herd = await HerdService.getAllHerd(options, searchTerm);
    res.send(Herd);
  } catch (error) {
    console.log("🚀 ~ file: Herd.controller.js:9 ~ error:", error);
    res.sendStatus(500);
  }
};

const getAllHerdByAccountId = async (req, res) => {
  try {
    const idAccount = req.params.idAccount;
    const Herd = await HerdService.getAllHerdByAccountId(idAccount);
    res.send(Herd);
  } catch (error) {
    console.log("🚀 ~ file: Herd.controller.js:9 ~ error:", error);
    res.sendStatus(500);
  }
};

const findHerdById = async (req, res) => {
  try {
    const id = req.params.id;
    const Herd = await HerdService.findHerdById(id);
    res.send(Herd);
  } catch (error) {
    console.log("🚀 ~ file: Herd.controller.js:26 ~ error:", error);
    res.sendStatus(500);
  }
};

const createHerd = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const { name, idCategory, quantity, idAccount } = req.body;
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    }
    const payload = {
      name,
      idCategory,
      quantity,
      idAccount,
      urlImage: img,
    };
    const Herd = await HerdService.createHerd(payload);
    if (!Herd) return res.sendStatus(500);
    return res.status(200).send(Herd);
  } catch (error) {
    console.log("🚀 ~ file: Herd.controller.js:44 ~ error:", error);
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
    console.log("🚀 ~ file: Herd.controller.js:56 ~ error:", error);
    res.sendStatus(500);
  }
};

const updateHerd = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    if (!req.body) return res.sendStatus(400);
    const { name, idCategory, quantity, idAccount } = req.body;
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    } else {
      img = req.body.img;
    }
    const payload = {
      name,
      idCategory,
      quantity,
      idAccount,
      urlImage: img,
    };
    const updateHerd = await HerdService.updateHerd(req.params.id, payload);
    return res.status(200).send(updateHerd);
  } catch (error) {
    console.log("🚀 ~ file: Herd.controller.js:68 ~ error:", error);
    res.sendStatus(500);
  }
};

module.exports = {
  createHerd,
  getAllHerdByAccountId,
  updateHerd,
  deleteOneHerd,
  findHerdById,
  getAllHerd,
};
