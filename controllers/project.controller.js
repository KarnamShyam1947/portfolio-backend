const { createOne, getAll, getOne, updateOne, deleteOne } = require("./../utils/crud.utils");
const Project = require("./../models/project.model");

const createProject = createOne(Project, "title");
const getProjects = getAll(Project);
const getProject = getOne(Project);
const updateProject = updateOne(Project);
const deleteProject = deleteOne(Project);


module.exports = {
  createProject,
  getProjects,  
  getProject,
  updateProject,
  deleteProject
};
