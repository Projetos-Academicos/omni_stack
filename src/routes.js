const express = require("express");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessao", SessionController.criar);

module.exports = routes;