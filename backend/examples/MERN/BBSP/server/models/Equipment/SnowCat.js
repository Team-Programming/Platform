const mongoose = require("mongoose");

const SnowCatSchema = new mongoose.Schema(
  {
    Name: String,
    Number: String,
    Location: String,
  },
  { timestamps: true }
);

mongoose.model("SnowCat", SnowCatSchema);
