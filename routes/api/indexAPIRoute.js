const express = require("express");

const v1Routes = require("./v1/apiV1Routes");

const routes = express.Router();

// index api route File
// direct all api v1 requests to ./v1/apiV1Routes
routes.use("/v1", v1Routes);

module.exports = routes;