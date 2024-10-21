const express = require("express");
const { getHome, postContent } = require("../controller/viewController");

const router = express.Router();

router.get("/home", getHome);
router.get("/postContent", postContent);


module.exports = router;