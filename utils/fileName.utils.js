const path = require("path");

function normalizeFileName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")         
    .replace(/[^a-z0-9\-]/g, ""); 
}

function generatePublicId(file) {
  const originalName = path.parse(file.originalname).name;
  const cleanName = normalizeFileName(originalName);
  const timestamp = Date.now();
  return `${cleanName}_${timestamp}`;
}

module.exports = {
  normalizeFileName,
  generatePublicId,
};
