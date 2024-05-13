const express = require("express");
const { getPokenea } = require("../controllers/imageController");

const router = express.Router();

router.get("/pokenea", getPokenea);

module.exports = router;
