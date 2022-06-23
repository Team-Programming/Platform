const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema(
  {
    First_Name: String,
    Last_Name: String,
    Phone_Number: String,
    Email: String,
    Age: Number,
    Address: String,
    Occupation: String,
    Ticket_Number: String,
  },
  { timestamps: true }
);

mongoose.model("Guest", GuestSchema);
