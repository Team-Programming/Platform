const mongoose = require("mongoose");

const SMISchema = new mongoose.Schema(
  {
    Name: String,
    Number: String,
    Location: String,
    Run: String,
  },
  { timestamps: true }
);

mongoose.model("SMI", SMISchema);
