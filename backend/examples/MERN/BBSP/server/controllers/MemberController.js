const mongoose = require("mongoose");
const Member = mongoose.model("Member");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getMembers: (req, res) => {
    Member.find()
      .then((members) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the members");
        // console.log(res.json(member))
        // console.log(members)
        console.log("We found the members");
        res.json(members); // responding with a .json object of the members
      })
      .catch((err) => res.status(400).json(err));
  },

  createMember: (req, res) => {
    console.log("We are creating a member");
    console.log(req.body);
    Member.create(req.body)
      .then((member) => {
        console.log("Member Created");
        res.json(member);
      })
      .catch((err) => res.status(400).json(err));
  },

  getMember: (req, res) => {
    Member.findById(req.params.id)
      .then((member) => {
        console.log("We are looking for all the members");
        console.log("We found the members");
        res.json(member); // responding with a .json object of the members
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateMember

  deleteMember: (req, res) => {
    Member.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Member Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
