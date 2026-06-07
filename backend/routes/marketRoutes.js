const express = require('express');
const router = express.Router();
const { getMarketPrices } = require('../controllers/marketController');

router.get('/prices', getMarketPrices);

module.exports = router;
