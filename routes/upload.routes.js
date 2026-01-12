const express = require("express")
const { uploadFileCloudinary, deleteFileCloudinary, uploadCloudinary } = require("../controllers/upload.controller")

const uploadRouter = express.Router()

uploadRouter.route("/").post(uploadCloudinary.single("image"), uploadFileCloudinary)
uploadRouter.route("/").delete(deleteFileCloudinary)

module.exports = uploadRouter
