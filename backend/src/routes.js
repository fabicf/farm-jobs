const routes = require("express").Router();

routes.get("/", (request, response) => {
  response.send("Fabi!");
});

routes.get("/jobs", (request, response) => {
  response.send("List of jobs");
});

routes.post("/jobs", (request, response) => {
    console.log(request.body)
  response.send("List of jobs2");

  });

routes.get("/test", (request, response) => {
    response.send("List of jobs");
  });

module.exports = routes;
