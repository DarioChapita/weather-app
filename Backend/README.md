<h1 align="center">Weather API</h1>

This is an API for fetching weather data using **Node.js (v16.9.1)**, **Express**, and **Axios**. It provides current weather data and weather forecasts based on the user's location or a specified city.

## Installation

1. Head over to [OpenWeather One Call API](https://openweathermap.org/api/one-call-3), create an account, and snag yourself an API KEY.
2. Clone this repository:

    ```bash
    git clone <REPOSITORY_URL>
    ```

3. Navigate to the project directory:

    ```bash
    cd backend
    ```

4. Install the dependencies:

    ```bash
    npm install
    ```

5. Create a `.env` file in the root of the project and add your environment variables:

    ```plaintext
    PORT=3000
    NODE_ENV=development
    OPENWEATHER_API_KEY='your_api_key'
    BASE_OPENWEATHER_API_URL='https://api.openweathermap.org/data/3.0/onecall'
    IP_API_URL='http://ip-api.com/json/'
    ```

6. Fire up the server:

    ```bash
    npm start
    ```

## Usage

You can use **Postman** or any other tool to make HTTP requests to the API.

### Get User's Location

- **URL:** `/api/v1/location`
- **Method:** `GET`

#### Successful Response:

```json
{
  "city": "CityName",
  "lat": 51.509865,
  "lon": -0.118092
}
```

### Get Current Weather

- **URL:** `/api/v1/current/:city?`
- **Method:** `GET`

#### URL Parameters:

- **city:**(optional): `City coordinates in the format lat,lon.`

#### Request Example:

_ **GET: /api/v1/current?city=51.509865,-0.118092**

#### Successful Response:
```json
{
  "weather": {...}
}
```
### Get Weather Forecast

- **URL:** `/api/v1/forecast/:city?`
- **Method:** `GET`

#### Query Parameters:

- **city:**(optional): `City coordinates in the format lat,lon.`

- **count:**(optional): `Number of days for the forecast.`

#### Request Example:

_ **GET: /api/v1/forecast?count=5&city=51.509865,-0.118092**

#### Successful Response:
```json
{
  "list": [...]
}
```

## Error Handling

If the request doesn't meet the validation schemas or if a server error occurs, you'll receive an error response:

#### Error Response:

```json
{
  "message": "Error message"
}
```

#### Examples of Errors:

- **400 Bad Request**: `Invalid input parameters.`

- **500 Internal Server Error**: `Server error.`

## Tests:

To run the tests, use the following command, this will execute the tests defined in the project to ensure the API functions correctly.

 ```bash
    npm test
 ```
