const mongoose = require("mongoose");
const GuideModel = require("../models/Guide");
const database = require("../connect");

const guide = [
  new GuideModel({
    idStage: "63f06f1a73af73fb75984dd6",
    idCategory: "63f069d3ebc00d7c6f011edd",
    idFood: ["63f06bfda21296c767a69caa", "63f06bfda21296c767a69caa"],
    idMedicine: ["63f06bfda21296c767a69caa", "63f06bfda21296c767a69caa"],
    content: "guis",
  }),
  new GuideModel({
    idStage: "63f06f1a73af73fb75984dd6",
    idCategory: "63f069d3ebc00d7c6f011edd",
    idFood: ["63f06bfda21296c767a69caa", "63f06bfda21296c767a69caa"],
    idMedicine: ["63f06bfda21296c767a69caa", "63f06bfda21296c767a69caa"],
    content: "guissdfsssssssssssssssssssss",
  }),
];

(async () => {
  await database.connectDatabase();
})();

guide.map(async (data, index) => {
  // eslint-disable-next-line no-unused-vars
  data.save((_err, result) => {
    if (index === guide.length) {
      // eslint-disable-next-line no-console
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
