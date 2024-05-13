const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const webRoutes = require("../routes/web");
const apiRoutes = require("../routes/api");
const imageRoutes = require("../routes/image");

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.set("port", port);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../resources/views"));

app.use("/", webRoutes);
app.use("/api", apiRoutes);
app.use("/image", imageRoutes);

module.exports = app;
