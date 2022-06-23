const mongoose = require("mongoose");
const Feature = mongoose.model("Feature");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getFeatures: (req, res) => {
    Feature.find()
      .then((features) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the features");
        console.log("We found the features");
        res.json(features); // responding with a .json object of the features
      })
      .catch((err) => res.status(400).json(err));
  },

  createFeature: (req, res) => {
    console.log("We are creating a feature");
    console.log(req.body);
    Feature.create(req.body)
      .then((feature) => {
        console.log("Feature Created");
        res.json(feature);
      })
      .catch((err) => res.status(400).json(err));
  },

  getFeature: (req, res) => {
    Feature.findById(req.params.id)
      .then((feature) => {
        console.log("We are looking for all the features");
        console.log("We found the features");
        res.json(feature); // responding with a .json object of the features
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateFeature

  deleteFeature: (req, res) => {
    Feature.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Feature Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
