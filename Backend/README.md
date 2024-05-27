Weather API

This is an API for fetching weather data using Node.js(v16.9.1), Express, and Axios. It provides current weather data and weather forecasts based on the user's location or a specified city.

Installation

Head over to "https://openweathermap.org/api/one-call-3", create an account, and snag yourself an API KEY.

Clone this repository:

git clone <REPOSITORY_URL>

Navigate to the project directory:

cd backend

Install the dependencies:

npm install

Create a .env file in the root of the project and add your environment variables:

PORT=3000
NODE_ENV=development
OPENWEATHER_API_KEY='your_api_key'
BASE_OPENWEATHER_API_URL='https://api.openweathermap.org/data/3.0/onecall'
IP_API_URL='http://ip-api.com/json/'

Fire up the server:

npm app.js

Usage

You can use Postman or any other tool to make HTTP requests to the API.

Get User's Location
URL: /api/v1/location

Method: GET

Successful Response:

{
  "city": "CityName",
  "lat": 51.509865,
  "lon": -0.118092
}

Get Current Weather

URL: /api/v1/current/:city?

Method: GET

URL Parameters:

city (optional): City coordinates in the format lat,lon.

Request Example:

GET /api/v1/current?city=51.509865,-0.118092

Successful Response:

{
  "weather": {...}
}

Get Weather Forecast

URL: /api/v1/forecast/:city?

Method: GET

URL Parameters:

city (optional): City coordinates in the format lat,lon.

Query Parameters:

count (optional): Number of days for the forecast.

Request Example:

GET /api

/v1/forecast?count=5&city=51.509865,-0.118092

Successful Response:

{
  "list": [...]
}

Error Handling

If the request doesn't meet the validation schemas or if a server error occurs, you'll receive an error response:

Error Response:

{
  "message": "Error message"
}

Examples of Errors:

400 Bad Request: Invalid input parameters.
500 Internal Server Error: Server error.

Tests

To run the tests, use the following command:

npm test

This will execute the tests defined in the project to ensure the API functions correctly.
