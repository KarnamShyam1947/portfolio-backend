const { createOne, getAll, getOne, updateOne, deleteOne } = require("./../utils/crud.utils");

const Publication = require("../models/publication.model");

const createPublication = createOne(Publication);
const getPublications = getAll(Publication);
const getPublication = getOne(Publication);
const updatePublication = updateOne(Publication);
const deletePublication = deleteOne(Publication);

module.exports = {
    createPublication,
    getPublications,
    getPublication,
    updatePublication,
    deletePublication,
};

