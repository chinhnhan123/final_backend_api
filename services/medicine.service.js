const MedicineRepository = require("../repositories/medicine.repository");

const createMedicine = async (data) => {
  try {
    const result = await MedicineRepository.createMedicine(data);
    return result;
  } catch (err) {
    console.log("🚀 -----------------------------------------------------🚀");
    console.log(
      "🚀 ~ file: Medicine.service.js:8 ~ createMedicine ~ err:",
      err
    );
    console.log("🚀 -----------------------------------------------------🚀");

    console.log("🚀 ~ file err:", err);
  }
};

const getAllMedicine = async () => {
  try {
    const result = await MedicineRepository.getAllMedicine();
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.service.js:27 ~ getAllMedicine ~ err:",
      err
    );
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const updateMedicine = async (id, data) => {
  try {
    const result = await MedicineRepository.updateMedicine(id, data);
    return result;
  } catch (err) {
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.service.js:46 ~ updateMedicine ~ err:",
      err
    );
    console.log(
      "🚀 --------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const deleteOneMedicine = async (id) => {
  try {
    const result = await MedicineRepository.deleteMedicine(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: Medicine.service.js:58 ~ deleteOneMedicine ~ err:",
      err
    );
    console.log(
      "🚀 -----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

const findMedicineById = async (id) => {
  try {
    const result = await MedicineRepository.findMedicineById(id);
    return result;
  } catch (err) {
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: medicine.service.js:81 ~ findMedicineById ~ err:",
      err
    );
    console.log(
      "🚀 ----------------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file err:", err);
  }
};

module.exports = {
  createMedicine,
  getAllMedicine,
  updateMedicine,
  deleteOneMedicine,
  findMedicineById,
};
