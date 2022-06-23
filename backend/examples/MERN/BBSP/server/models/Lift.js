const mongoose = require("mongoose");

const LiftSchema = new mongoose.Schema(
  {
    Name: String,
    Number: Number,
    Location: String,
    Status: String
  },
  { timestamps: true }
);

mongoose.model("Lift", LiftSchema);
