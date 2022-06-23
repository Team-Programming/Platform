const mongoose = require("mongoose");
const Incident = mongoose.model("Incident");

module.exports = {
  getIncidents: (req, res) => {
    Incident.find()
      .then((incidents) => {
        console.log("We are looking for all the incidents");
        console.log("We found the incidents");
        res.json(incidents); // responding with a .json object of the incidents
      })
      .catch((err) => res.status(400).json(err));
  },

  createIncident: (req, res) => {
    console.log("We are creating a incident");
    console.log(req.body);
    Incident.create(req.body)
      .then((incident) => {
        console.log("Incident Created");
        res.json(incident);
      })
      .catch((err) => res.status(400).json(err));
  },

  getIncident: (req, res) => {
    Incident.findById(req.params.id)
      .then((incident) => {
        console.log("We are looking for all the incidents");
        console.log("We found the incidents");
        res.json(incident); // responding with a .json object of the incidents
      })
      .catch((err) => res.status(400).json(err));
  },

  updateIncident: (req, res) => {
    console.log("Update Incident");
    Incident.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then((incident) => {
        // incident is the parameter passed into .then function
        console.log("We found the incident!");
        res.json(incident); // responding with a .json object of the incident
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteIncident: (req, res) => {
    Incident.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Incident Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
