require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
    BASE_OPENWEATHER_API_URL: process.env.BASE_OPENWEATHER_API_URL,
    IP_API_URL: process.env.IP_API_URL,
};
