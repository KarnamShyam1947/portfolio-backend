const certificate = require("../models/certificate.model");
const { createOne, getAll, getOne, updateOne, deleteOne } = require("../utils/crud.utils");

const createCertificate = createOne(certificate, "title");
const getCertificates = getAll(certificate);
const getCertificate = getOne(certificate);
const updateCertificate = updateOne(certificate);
const deleteCertificate = deleteOne(certificate);

module.exports = {
    createCertificate,
    getCertificates,
    getCertificate,
    updateCertificate,
    deleteCertificate
};