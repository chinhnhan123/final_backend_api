const mongoose = require("mongoose");

const { Schema } = mongoose;

const StageSchema = new Schema(
  {
    idStage: {
      type: Number,
      required: true,
    },
    nameStage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Stage = mongoose.model("Stage", StageSchema);

module.exports = Stage;
