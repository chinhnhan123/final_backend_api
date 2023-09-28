const MedicineModel = require("../database/models/Medicine");

const createMedicine = async (data) => {
  try {
    const Medicine = await MedicineModel.create(data);
    return Medicine;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.repository.js:8 ~ createMedicine ~ err:",
      err
    );
    console.log(
      "🚀 --------------------------------------------------------🚀"
    );
    return err;
  }
};

const getAllMedicine = async () => {
  try {
    const Medicines = await MedicineModel.find();
    return Medicines;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.repository.js:26 ~ getAllMedicine ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const updateMedicine = async (id, data) => {
  try {
    const Medicine = await MedicineModel.updateMany({ _id: id }, data);
    return Medicine;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.repository.js:40 ~ updateMedicine ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    return err;
  }
};

const deleteMedicine = async (id) => {
  try {
    const Medicine = await MedicineModel.findOneAndRemove({ _id: id });
    return Medicine;
  } catch (err) {
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.repository.js:50 ~ deleteMedicine ~ err:",
      err
    );
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );

    return err;
  }
};

const findMedicineById = async (id) => {
  try {
    const result = await MedicineModel.findById({ _id: id });
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.repository.js:67 ~ findMedicineById ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------🚀"
    );
    return err;
  }
};

module.exports = {
  createMedicine,
  getAllMedicine,
  updateMedicine,
  deleteMedicine,
  findMedicineById,
};
