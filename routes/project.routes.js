const express = require('express');
const { getProjects, createProject, updateProject, deleteProject, getProject } = require('../controllers/project.controller');

const router = express.Router();

router.route('/')
    .get(getProjects)
    .post(createProject);

router.route('/:id')
    .get(getProject)
    .put(updateProject)
    .delete(deleteProject);

module.exports = router;