const Category = require("./api/category");
const Stage = require("./api/stage");
const food = require("./api/food");
const guide = require("./api/guide");
const medicine = require("./api/medicine");
const admin = require("./api/admin");
const herd = require("./api/herd");
const auth = require("./api/auth");
const chat = require("./api/chat");
const conversation = require("./api/conversation");
function route(app) {
  app.use("/api/category", Category);
  app.use("/api/stage", Stage);
  app.use("/api/food", food);
  app.use("/api/guide", guide);
  app.use("/api/medicine", medicine);
  app.use("/api/admin", admin);
  app.use("/api/herd", herd);
  app.use("/api/auth", auth);
  app.use("/api/chat", chat);
  app.use("/api/conversation", conversation);
}

module.exports = route;
