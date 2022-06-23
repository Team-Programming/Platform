const mongoose = require("mongoose");
const Project = mongoose.model("Project");

module.exports = {
  index: (req, res) => {
    console.log("Index pinggg-ed");
    res.json({
      // Our response to this function being called
      message: "Hello"
    });
  },

  getProjects: (req, res) => {
    console.log("Retrieving Projects")
    Project.find()
      .then(projects => {
        res.json(projects);
        console.log("Projects Sent")
      })
      .catch(err => res.status(400).json(err));
  },

  createProject: (req, res) => {
    console.log("Creating a Project");
    console.log(req.body);
    res.json("Request Received");
    Project.create(req.body).then(response => {
      console.log(response);
    });
  }
};
