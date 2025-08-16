import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  image: { type: String, required: true },
  sourceCode: { type: String, required: true },
  liveLink: { type: String, required: true },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
