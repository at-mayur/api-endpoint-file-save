const express = require("express");

const apiRoutes = require("./api/indexAPIRoute");

const routes = express.Router();

// index route File
// direct all api requests to ./api/indexAPIRoute
routes.use("/api", apiRoutes);

module.exports = routes;