const multer = require("multer");
const sharp = require("sharp");
const Image = require("../model/imageModel");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image"), false);
  }
};

const uploadImg = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadImages = uploadImg.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 3 },
]);

exports.resizeImages = async (req, res, next) => {
  try {
    req.body.urlName = req.body.imageName.split(" ").join("-");

    req.body.imageCover = `${req.body.urlName}-imageCover-${req.requestTime}.webp`;

    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .toFormat("webp")
      .webp({ quality: 90 })
      .toFile(`public/uploads/images/${req.body.imageCover}`);

    req.body.images = [];
    
    await Promise.all(
        req.files.images.map(async (file, i) => {
            const filename = `${req.body.urlName}-images${i + 1}-${req.requestTime}.webp`;

            await sharp(file.buffer)
              .resize(2000, 1333)
              .toFormat("webp")
              .webp({ quality: 90 })
              .toFile(`public/uploads/images/${filename}`);
        
              req.body.images.push(filename);
        })
    )

    next();
  } catch (error) {
    console.log(`${error.message}`);
  }
};

exports.createImage = async (req, res, next) => {
  try {
    const doc = await Image.create(req.body);

     res.status(200).json({
       message: "success",
       data: {
        doc
       }
     }); 
  } catch (error) {
    console.log(`${error.message}`);
  }
};
