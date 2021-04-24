var express = require('express');
var router = express.Router();
const path = require('path');

const {index} = require(path.join('..','controllers','indexController'));

/* GET home page. */
router.get('/',index);

module.exports = router;
