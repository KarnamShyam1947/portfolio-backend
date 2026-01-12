const { createOne, getAll, getOne, updateOne, deleteOne } = require("../utils/crud.utils");
const Skill = require("../models/skill.model");

const createSkill = createOne(Skill);
const getSkills = getAll(Skill);
const getSkill = getOne(Skill);
const updateSkill = updateOne(Skill);
const deleteSkill = deleteOne(Skill);

module.exports = {
  createSkill,
  getSkills,
  getSkill,
  updateSkill,
  deleteSkill,
};
