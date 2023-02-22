const mongoose = require("mongoose");

const { Schema } = mongoose;

const GuideMedicineSchema = new Schema(
  {
    idGuide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
    },
    idMedicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const GuideMedicine = mongoose.model("GuideMedicine", GuideMedicineSchema);

module.exports = GuideMedicine;
