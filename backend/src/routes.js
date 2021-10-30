const routes = require("express").Router();
const userController = require("./controller/userController");
const userControle = require("./controller/userController");


routes.get("/users", userController.list);

module.exports = routes

