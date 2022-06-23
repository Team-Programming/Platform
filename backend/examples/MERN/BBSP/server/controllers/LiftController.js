const mongoose = require("mongoose");
const Lift = mongoose.model("Lift");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getLifts: (req, res) => {
    Lift.find()
      .then((lifts) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the lifts");
        console.log("We found the lifts");
        res.json(lifts); // responding with a .json object of the lifts
      })
      .catch((err) => {
        console.log("Lift Controller Error")
        res.status(400).json(err)});
  },

  createLift: (req, res) => {
    console.log("We are creating a lift");
    console.log(req.body);
    Lift.create(req.body)
      .then((lift) => {
        console.log("Lift Created");
        res.json(lift);
      })
      .catch((err) => res.status(400).json(err));
  },

  getLift: (req, res) => {
    Lift.findById(req.params.id)
      .then((lift) => {
        console.log("We are looking for all the lifts");
        console.log("We found the lifts");
        res.json(lift); // responding with a .json object of the lifts
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateLift

  deleteLift: (req, res) => {
    Lift.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Lift Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
