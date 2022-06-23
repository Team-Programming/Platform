const projects = require("../controllers/projects");

module.exports = function(app) {
  app.get("/api", projects.index);
  app.get("/api/project/all", projects.getProjects);
  app.post("/api/project/new",projects.createProject)
};
