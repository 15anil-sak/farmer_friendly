const express = require('express');
const router = express.Router();
const { getSchemes, getSchemeById } = require('../controllers/schemeController');

router.route('/').get(getSchemes);
router.route('/:id').get(getSchemeById);

module.exports = router;
