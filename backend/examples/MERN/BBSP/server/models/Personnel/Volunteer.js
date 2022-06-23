const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema(
  {
    First_Name: String,
    Last_Name: String,
    Phone_Number: String,
    Email: String,
    Age: Number,
    Address: String,
    Occupation: String,
    Access_Level: Number,
  },
  { timestamps: true }
);

mongoose.model("Volunteer", VolunteerSchema);
