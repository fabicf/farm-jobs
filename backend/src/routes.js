const routes = require("express").Router();
const userController = require("./controller/userController");
const jobController = require("./controller/jobController");


routes.get("/users", userController.list);
routes.get("/jobs", jobController.list);


module.exports = routes

