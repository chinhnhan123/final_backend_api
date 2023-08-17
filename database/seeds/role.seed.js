const mongoose = require("mongoose");
const roleModel = require("../models/Role");
const { ADMIN, FARMER, TRADER } = require("../../constants/role");
const database = require("../connect");

const role = [
  new roleModel({
    role: ADMIN,
    roleId: 1,
  }),
  new roleModel({
    role: FARMER,
    roleId: 2,
  }),
  new roleModel({
    role: TRADER,
    roleId: 3,
  }),
];

(async () => {
  await database.connectDatabase();
})();

role.map(async (data, index) => {
  // eslint-disable-next-line no-unused-vars
  data.save((_err, result) => {
    if (index === role.length) {
      // eslint-disable-next-line no-console
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
