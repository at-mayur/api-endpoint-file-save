const express = require("express");

const multer = require("../../../config/multerConfig");
const { uploadController } = require("../../../controllers/fileUploadController");

const routes = express.Router();

// index api v1 route File
// direct all api v1 requests to respective controller for action
// multer.uploadBill will extract file from request and store it at destination
routes.post("/upload-bill", multer.uploadBill, uploadController);


module.exports = routes;