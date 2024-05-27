const express = require('express');
const { getByLocations, selectCity, selectForecastCity } = require('../controllers/weatherController');
const validateRequest = require('../middlewares/validateRequest');
const { citySchema, combinedSchema } = require('../schema/weatherModel');
const router = express.Router();

router.get('/location', getByLocations);
router.get('/current/:city?', validateRequest({ query: citySchema }), selectCity);
router.get('/forecast/:city?', validateRequest({ query: combinedSchema }), selectForecastCity);

module.exports = router;
