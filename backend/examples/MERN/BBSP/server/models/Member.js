const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    First_Name: String,
    Last_Name: String,
    Email_Address: String,
    Phone_Number:String,
    Position: [],
    Access_Level: Number,
  },
  { timestamps: true}
);

mongoose.model("Member", MemberSchema);