const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema(
  {
    Name: String,
    Type: String,
    Run: String,
    Location: String,
    Difficulty: String
  },
  { timestamps: true }
);

mongoose.model("Feature", FeatureSchema);
