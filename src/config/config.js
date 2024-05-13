const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const webRoutes = require("../routes/web");
const apiRoutes = require("../routes/api");

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
app.set("port", port);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../resources/views"));

app.use("/", webRoutes);
app.use("/api", apiRoutes);

module.exports = app;
