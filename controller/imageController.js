const multer = require("multer");
const sharp = require("sharp");


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Not an image"), false);
    }
}

const uploadImg = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

exports.uploadImages = uploadImg.fields([
    {name: 'imageCover', maxCount: 1},
    {name: 'images', maxCount: 3}
])

exports.resizeImages = async (req, res, next) => {
    try {
        console.log(req.files);
        
        next();
    } catch (error) {
        console.log("Error");
    }
}

exports.createImage = (req, res, next) => {
    console.log(req.files);
    
    res.status(200).json({
        message: "success"
    })
}