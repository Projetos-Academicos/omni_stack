const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessao", SessionController.criar);
routes.post("/spots", upload.single('imagem'), SpotController.criar);

module.exports = routes;