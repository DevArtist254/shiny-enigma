const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageName: String,
    urlName: String,
    imageCover: String,
    images: [String],
  },
  {
    toJSON: true,
    toObject: true,
  }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;