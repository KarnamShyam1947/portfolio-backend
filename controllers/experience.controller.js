const Experience = require("../models/experience.model");
const { createOne, getAll, getOne, updateOne, deleteOne } = require("../utils/crud.utils");

const createExperience = createOne(Experience);
const getAllExperiences = getAll(Experience);
const getExperience = getOne(Experience);
const updateExperience = updateOne(Experience);
const deleteExperience = deleteOne(Experience);

module.exports = {
  createExperience,
  getAllExperiences,
  getExperience,
  updateExperience,
  deleteExperience
};
