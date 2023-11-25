require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const http = require("http");
const socketio = require("socket.io");
const database = require("./database/connect");
const { WebSockets } = require("./utilities/WebSockets");
const route = require("./routes/index");

var app = express();
const server = http.createServer(app);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API for PigCare App",
    description: "This is a REST API application made with Express.",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:4000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/api/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { explorer: true })
);

WebSockets(io);

route(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

(async () => {
  await database.connectDatabase();
})();

server.listen(process.env.PORT, () => {
  console.log("Server is up and running on port 4000");
});
