const cloudinary = require("./cloudinary");

const handleUploadImage = async (filePath) => {
  const folder = "Final";
  const cloudinaryResponse = await cloudinary.uploader.upload(filePath, {
    folder,
  });
  return cloudinaryResponse.secure_url;
};

module.exports = handleUploadImage;
