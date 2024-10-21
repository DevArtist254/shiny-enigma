const express = require('express');
const { createContent } = require('../controller/contentController');


const router = express.Router();

router.post("/", createContent);

module.exports = router;
