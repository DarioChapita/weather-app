const makeHttpRequest = require('./httpService');
const { OPENWEATHER_API_KEY, BASE_OPENWEATHER_API_URL, IP_API_URL } = require('../config/config');

/**
 * Retrieves the user's location by making a request to the IP API.
 *
 * @return {Promise<Object>} An object containing the city, latitude, and longitude of the user's location.
 * @throws {Error} If there is an error retrieving the user's location.
 */
const getUserLocation = async () => {
  const data = await makeHttpRequest(IP_API_URL);
  if (data.status === "success") {
    return {
      city: data.city,
      lat: data.lat,
      lon: data.lon,
    };
  } else {
    throw new Error(`Error getting user location: ${data.message}`);
  }
};

/**
 * Builds the parameters for the weather API request.
 *
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @param {number} count - The number of days of forecast data to retrieve.
 * @param {string} units - The units of measurement for the weather data.
 * @return {Object} The parameters for the weather API request.
 */
const buildWeatherParams = (lat, lon, count, units) => ({
  lat,
  lon,
  appid: OPENWEATHER_API_KEY,
  units,
  exclude: 'current,minutely,hourly',
  cnt: count,
});

/**
 * Retrieves a weather overview for a given location.
 *
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @param {number} count - The number of days of weather data to retrieve.
 * @param {string} [units='metric'] - The units of measurement for the weather data.
 * @return {Promise<Object>} A Promise that resolves to an object containing the weather overview data.
 */
const getWeatherOverview = async (lat, lon, count, units = 'metric') => {
  const params = buildWeatherParams(lat, lon, count, units);
  return makeHttpRequest(BASE_OPENWEATHER_API_URL, params);
};

module.exports = {
  getUserLocation,
  getWeatherOverview,
};
