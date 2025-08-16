import { v2 as cloudinary } from "cloudinary";

import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  const { title, description, tags, sourceCode, liveLink } = req.body;
  const projectImage = req.file;

  if (
    !title ||
    !description ||
    !tags ||
    !sourceCode ||
    !liveLink ||
    !projectImage
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const uploadedImage = await cloudinary.uploader.upload(projectImage.path);

    const project = new Project({
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      sourceCode,
      liveLink,
      image: uploadedImage.secure_url,
    });

    await project.save();

    return res.status(201).json({
      success: true,
      message: "Project uploaded successfully",
      project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Project upload failed",
    });
  }
};

export const deleteProject = async (req, res) => {
  const { projectId } = req.body;

  if (!projectId) {
    return res.status(400).json({
      success: false,
      message: "Project ID is required",
    });
  }

  try {
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Project deletion failed",
    });
  }
};

export const projectList = async (req, res) => {
  try {
    const allProjects = await Project.find({});

    if (allProjects.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No projects found",
        projects: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Fetched all projects successfully",
      projects: allProjects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};
