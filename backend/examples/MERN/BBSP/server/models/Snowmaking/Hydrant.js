const mongoose = require("mongoose");

const HydrantSchema = new mongoose.Schema(
  {
    Name: String,
    Number: String,
    Location: String,
    Run: String,
  },
  { timestamps: true }
);

mongoose.model("Hydrant", HydrantSchema);
