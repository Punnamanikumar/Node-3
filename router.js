const express = require("express");
const controller = require("./controller");
const empRouter = express.Router();

empRouter.route("/emp").get(controller.controllerGet);
empRouter.route("/emp/:batch").get(controller.controllerGet);

module.exports = empRouter;
