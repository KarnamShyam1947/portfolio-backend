const express = require("express")
const { uploadFileCloudinary, deleteFileCloudinary, uploadCloudinary } = require("../controllers/upload.controller")

const uploadRouter = express.Router()

/**
 * @openapi
 * /api/v1/upload:
 *   post:
 *     tags:
 *       - Upload
 *     summary: Upload an image to Cloudinary
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imageUrl:
 *                   type: string
 *                   example: https://res.cloudinary.com/demo/image/upload/v123456789/sample.jpg
 *       400:
 *         description: Upload failed
 */
uploadRouter.route("/")
  .post(uploadCloudinary.single("image"), uploadFileCloudinary);

/**
 * @openapi
 * /api/v1/upload:
 *   delete:
 *     tags:
 *       - Upload
 *     summary: Delete an uploaded image from Cloudinary
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *             properties:
 *               url:
 *                 type: string
 *                 description: The full URL of the image to delete
 *                 example: https://res.cloudinary.com/demo/image/upload/v123456789/sample.jpg
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Image deleted successfully
 *       400:
 *         description: Bad request (e.g., missing or invalid URL)
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
uploadRouter.route("/")
  .delete(deleteFileCloudinary);


module.exports = uploadRouter
