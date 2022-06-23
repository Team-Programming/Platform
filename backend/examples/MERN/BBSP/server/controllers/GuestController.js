const mongoose = require("mongoose");
const Guest = mongoose.model("Guest");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getGuests: (req, res) => {
    Guest.find()
      .then((guests) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the guests");
        // console.log(res.json(guest))
        // console.log(guests)
        console.log("We found the guests");
        res.json(guests); // responding with a .json object of the guests
      })
      .catch((err) => res.status(400).json(err));
  },

  createGuest: (req, res) => {
    console.log(req.body);
    Guest.create(req.body)
      .then((guest) => {
        console.log("Guest Created");
        res.json(guest);
      })
      .catch((err) => res.status(400).json(err));
  },

  getGuest: (req, res) => {
    Guest.findById(req.params.id)
      .then((guest) => {
        console.log("We are looking for all the guests");
        console.log("We found the guests");
        res.json(guest); // responding with a .json object of the guests
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateGuest

  deleteGuest: (req, res) => {
    Guest.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Guest Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
