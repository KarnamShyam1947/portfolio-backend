const Education = require("../models/education.model")
const {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne
} = require("./../utils/crud.utils");    

const createEducation = createOne(Education);
const getEducations = getAll(Education);
const getEducation = getOne(Education);
const updateEducation = updateOne(Education);
const deleteEducation = deleteOne(Education);

module.exports = {
    createEducation,
    getEducations,
    getEducation,
    updateEducation,
    deleteEducation
};
