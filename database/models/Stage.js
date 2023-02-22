const mongoose = require("mongoose");

const { Schema } = mongoose;

const StageSchema = new Schema(
  {
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
