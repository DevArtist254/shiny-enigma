const express = require("express");
const { createImage, uploadImages, resizeImages } = require("../controller/imageController");

const router = express.Router();

router.post("/createImage", uploadImages, resizeImages, createImage);


module.exports = router;