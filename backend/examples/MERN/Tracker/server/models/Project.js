const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    projectedStartDate: String,
    projectedEndDate: String,
    actualStartDate: String,
    actualEndDate: String,
  },
  { timestamps: true }
);

mongoose.model("Project", ProjectSchema);
