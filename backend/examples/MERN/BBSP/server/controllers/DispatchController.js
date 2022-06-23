const mongoose = require("mongoose");
const Dispatch = mongoose.model("Dispatch");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getDispatches: (req, res) => {
    Dispatch.find()
      .then((dispatches) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the dispatches");
        console.log("We found the dispatches");
        res.json(dispatches); // responding with a .json object of the dispatches
      })
      .catch((err) => res.status(400).json(err));
  },

  createDispatch: (req, res) => {
    console.log("We are creating a dispatch");
    console.log(req.body);
    Dispatch.create(req.body)
      .then((dispatch) => {
        console.log("Dispatch Created");
        res.json(dispatch);
      })
      .catch((err) => res.status(400).json(err));
  },

  getDispatch: (req, res) => {
    Dispatch.findById(req.params.id)
      .then((dispatch) => {
        console.log("We are looking for all the dispatches");
        console.log("We found the dispatches");
        res.json(dispatch); // responding with a .json object of the dispatches
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateDispatch

  deleteDispatch: (req, res) => {
    Dispatch.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Dispatch Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
