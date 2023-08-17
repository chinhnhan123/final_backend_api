const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    roleId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
