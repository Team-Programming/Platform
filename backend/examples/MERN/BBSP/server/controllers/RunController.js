const mongoose = require("mongoose");
const Run = mongoose.model("Run");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getRuns: (req, res) => {
    Run.find()
      .then((runs) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the runs");
        console.log("We found the runs");
        res.json(runs); // responding with a .json object of the runs
      })
      .catch((err) => {
        console.log("Run Controller Error")
        res.status(400).json(err)});
  },

  createRun: (req, res) => {
    console.log("We are creating a run");
    console.log(req.body);
    Run.create(req.body)
      .then((run) => {
        console.log("Run Created");
        res.json(run);
      })
      .catch((err) => res.status(400).json(err));
  },

  getRun: (req, res) => {
    Run.findById(req.params.id)
      .then((run) => {
        console.log("We are looking for all the runs");
        console.log("We found the runs");
        res.json(run); // responding with a .json object of the runs
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateRun

  deleteRun: (req, res) => {
    Run.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Run Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
