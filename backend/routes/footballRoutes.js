const express = require('express');
const router = express.Router();
const { getFootballLeagues } = require('../controllers/footballController');

router.get('/football_match', getFootballLeagues);

module.exports = router;
