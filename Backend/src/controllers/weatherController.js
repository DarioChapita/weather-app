const { getUserLocation, getWeatherOverview } = require('../services/weatherService');

/**
 * Retrieves the user's location data and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise<void>} A promise that resolves when the response is sent.
 */
const getByLocations = async (req, res, next) => {
    try {
        const locationData = await getUserLocation();
        res.json(locationData);
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieves the latitude and longitude coordinates from a city string.
 *
 * @param {string} city - The city string in the format "lat,lon".
 * @return {Promise<Object>} An object containing the latitude and longitude coordinates.
 */
const getLatLonFromCity = async (city) => {
    if (city) {

        const { lat, lon } = city.split(',').map(Number).reduce((acc, val, index) => {
            if (index === 0) acc.lat = val;
            if (index === 1) acc.lon = val;
            return acc;
        }, {})

        return { lat, lon };
    }
    return getUserLocation();
};

/**
 * Retrieves weather data based on the provided city and count.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @param {boolean} [forecast=false] - Whether to retrieve a forecast or not.
 * @return {Promise<void>} A promise that resolves when the weather data is retrieved and sent as a JSON response.
 */
const getWeatherData = async (req, res, next, forecast = false) => {
    const { city, count } = req.query;
    try {
        const { lat, lon } = await getLatLonFromCity(city);

        const weatherData = forecast
            ? await getWeatherOverview(lat, lon, count)
            : await getWeatherOverview(lat, lon);

        res.json(weatherData);
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieves weather data for a selected city and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise<void>} A promise that resolves when the weather data is retrieved and sent as a JSON response.
 */
const selectCity = async (req, res, next) => {
    await getWeatherData(req, res, next, false);
};

/**
 * Retrieves weather data for a selected city and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise<void>} A promise that resolves when the weather data is retrieved and sent as a JSON response.
 */
const selectForecastCity = async (req, res, next) => {
    await getWeatherData(req, res, next, true);
};

module.exports = {
    getByLocations,
    selectCity,
    selectForecastCity,
};
