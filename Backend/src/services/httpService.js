const axios = require('axios');

/**
 * Makes an HTTP GET request to the specified URL with optional query parameters.
 *
 * @param {string} url - The URL to make the request to.
 * @param {Object} [params={}] - The query parameters to include in the request.
 * @return {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - If the request fails or an error occurs.
 */
const makeHttpRequest = async (url, params = {}) => {
    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
        throw new Error(`Failed to fetch data from ${url}`);
    }
};

module.exports = makeHttpRequest;
