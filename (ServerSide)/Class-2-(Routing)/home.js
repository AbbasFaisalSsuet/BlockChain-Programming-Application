const express = require('express');
const router = express.Router();
const path = require('path');

const StaticPath = path.join(__dirname,"./Multiple Pages RoutingWebsite/")
router.use(express.static(StaticPath))

module.exports = router;