const cloudinary = require("../config/cloudinary.config");

const extractPublicIdFromUrl = (url) => {
    const parts = url.split('/');
    const versionIndex = parts.findIndex(p => p.startsWith('v')) + 1;
    const publicIdWithExt = parts.slice(versionIndex).join('/'); 
    const publicId = publicIdWithExt.replace(/\.[^/.]+$/, ''); 

    return publicId;

}

const deleteAsset = async (url) => {
    console.log(`deleting asset: ${url}`);
    
    const publicId = extractPublicIdFromUrl(url);
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
}

module.exports = { extractPublicIdFromUrl, deleteAsset };
