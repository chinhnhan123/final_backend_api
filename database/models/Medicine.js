const mongoose = require("mongoose");
const { VACCINE, MEDICINE, TONIC } = require("../../constants/typesMedicine");

const { Schema } = mongoose;

const MedicineSchema = new Schema(
  {
    nameMedicine: {
      type: String,
      required: true,
    },
    types: {
      type: String,
      enum: [VACCINE, MEDICINE, TONIC],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instruction: {
      type: String,
      required: true,
    },
    urlImage: String,
  },
  { timestamps: true }
);

const Medicine = mongoose.model("Medicine", MedicineSchema);

module.exports = Medicine;
