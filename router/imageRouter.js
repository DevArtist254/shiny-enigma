const express = require("express");
const { createImage, uploadImages } = require("../controller/imageController");

const router = express.Router();

router.post("/createImage", uploadImages, createImage);


module.exports = router;