const MedicineService = require("../services/medicine.service");
const handleUploadImage = require("../utilities/uploadImage");

const getAllMedicine = async (req, res) => {
  try {
    const Medicine = await MedicineService.getAllMedicine();
    res.send(Medicine);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.controller.js:8 ~ getAllMedicine ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const findMedicineById = async (req, res) => {
  try {
    const id = req.params.id;
    const Medicine = await MedicineService.findMedicineById(id);
    res.send(Medicine);
  } catch (error) {
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.controller.js:22 ~ findMedicineByName ~ error:",
      error
    );
    console.log(
      "🚀 -------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const createMedicine = async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);
    const { nameMedicine, types, instruction, description } = req.body;
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    }
    const payload = {
      nameMedicine,
      types,
      instruction,
      description,
      urlImage: img,
    };

    const Medicine = await MedicineService.createMedicine(payload);
    if (!Medicine) return res.sendStatus(500);
    return res.status(200).send(Medicine);
  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteOneMedicine = async (req, res) => {
  try {
    if (!req.params.id) return res.sendStatus(400);
    const deleteMedicine = await MedicineService.deleteOneMedicine(
      req.params.id
    );
    if (!deleteMedicine) return res.sendStatus(500);
    return res.status(200).send(deleteMedicine);
  } catch (error) {
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.controller.js:64 ~ deleteOneMedicine ~ error:",
      error
    );
    console.log(
      "🚀 ------------------------------------------------------------------------🚀"
    );
    res.sendStatus(500);
  }
};

const updateMedicine = async (req, res) => {
  try {
    if (!req.params.id || !req.body) return res.sendStatus(400);

    const { nameMedicine, types, instruction, description } = req.body;
    let img = "";
    if (req?.file?.path) {
      img = await handleUploadImage(req.file.path);
    } else {
      img = req.body.img;
    }
    const payload = {
      nameMedicine,
      types,
      instruction,
      description,
      urlImage: img,
    };
    const updateMedicine = await MedicineService.updateMedicine(
      req.params.id,
      payload
    );
    return res.status(200).send(updateMedicine);
  } catch (error) {
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.controller.js:90 ~ updateMedicine ~ error:",
      error
    );
    console.log(
      "🚀 ---------------------------------------------------------------------🚀"
    );
  }
};

module.exports = {
  createMedicine,
  getAllMedicine,
  updateMedicine,
  deleteOneMedicine,
  findMedicineById,
};
