const multer = require("multer");
const cloudinary = require("./../config/cloudinary.config");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { deleteAsset } = require("../utils/cloudinary.utils");
const { generatePublicId } = require("../utils/fileName.utils");

const multerCloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'dynamic-portfolio',
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'],
        public_id: (req, file) => generatePublicId(file),
    }
});

const uploadCloudinary = multer({ storage: multerCloudinaryStorage });

const uploadFileCloudinary = (req, res) => {
    console.log(req.file.path);

    if (req.file && req.file.path) {
        res.json({ imageUrl: req.file.path });
    } else {
        res.status(400).json({ error: 'Upload failed' });
    }
}

const deleteFileCloudinary = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }


    try {
        const result = await deleteAsset(url);

        if (result.result === 'ok') {
            return res.status(200).json({ message: 'Image deleted successfully' });
        } else if (result.result === 'not found') {
            return res.status(404).json({ error: 'Image not found' });
        }
        else{
            return res.status(400).json({ error: 'Failed to delete image' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }

}


module.exports = {
    uploadCloudinary,
    uploadFileCloudinary,
    deleteFileCloudinary
}