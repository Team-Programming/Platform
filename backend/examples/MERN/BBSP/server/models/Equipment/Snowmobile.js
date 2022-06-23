const mongoose = require("mongoose");

const SnowmobileSchema = new mongoose.Schema(
  {
    Name: String,
    Number: String,
    Location: String,
  },
  { timestamps: true }
);

mongoose.model("Snowmobile", SnowmobileSchema);
