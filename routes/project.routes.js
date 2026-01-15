const express = require('express');
const { getProjects, createProject, updateProject, deleteProject, getProject } = require('../controllers/project.controller');

const router = express.Router();

router.get("/", getProjects)
router.post("/", createProject);

router.get("/:id", getProject)
router.put("/:id", updateProject)
router.delete("/:id", deleteProject);

module.exports = router;