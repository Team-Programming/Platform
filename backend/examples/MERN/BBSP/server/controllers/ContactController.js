const mongoose = require("mongoose");
const Contact = mongoose.model("Contact");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

  getContacts: (req, res) => {
    Contact.find()
      .then((contacts) => {
        // user is the parameter passed into .then function
        console.log("We are looking for all the contacts");
        // console.log(res.json(contact))
        // console.log(contacts)
        console.log("We found the contacts");
        res.json(contacts); // responding with a .json object of the contacts
      })
      .catch((err) => res.status(400).json(err));
  },

  createContact: (req, res) => {
    console.log(req.body);
    Contact.create(req.body)
      .then((contact) => {
        console.log("Contact Created");
        res.json(contact);
      })
      .catch((err) => res.status(400).json(err));
  },

  getContact: (req, res) => {
    Contact.findById(req.params.id)
      .then((contact) => {
        console.log("We are looking for all the contacts");
        console.log("We found the contacts");
        res.json(contact); // responding with a .json object of the contacts
      })
      .catch((err) => res.status(400).json(err));
  },

  //updateContact

  deleteContact: (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then((response) => {
        console.log("Contact Deleted");
        res.json(response);
      })
      .catch((err) => {
        console.log("This is the error", err);
        res.status(400).json(err);
      });
  },
};
