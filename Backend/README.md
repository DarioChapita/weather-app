Challenge Personal Pay

# Weather API

Esta es una API para obtener datos del clima utilizando Node.js, Express, y Axios. Proporciona datos actuales del clima y previsiones meteorológicas basadas en la ubicación del usuario o una ciudad específica.

## Instalación

0. Ingrese a la siguiente URL "https://openweathermap.org/api/one-call-3", cree una cuenta y obtenga una API KEY.

1. Clona este repositorio:

   git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto:

   cd backend

3. Instala las dependencias:

   npm install

4. Crea un archivo `.env` en la raíz del proyecto y añade tus variables de entorno:

   ```
   PORT=3000
   NODE_ENV=development
   OPENWEATHER_API_KEY='tu_api_key'
   BASE_OPENWEATHER_API_URL='https://api.openweathermap.org/data/3.0/onecall'
   IP_API_URL='http://ip-api.com/json/'
   ```

5. Inicia el servidor:

   npm app.js

## Uso

Puedes utilizar Postman o cualquier otra herramienta para hacer solicitudes HTTP a la API.

### Obtener la ubicación del usuario

**URL:** `/api/v1/location`

**Método:** `GET`

**Respuesta exitosa:**

```json
{
  "city": "CityName",
  "lat": 51.509865,
  "lon": -0.118092
}

Obtener el clima actual

URL: /api/v1/current/:city?

Método: GET

Parámetros de URL:

city (opcional): Coordenadas de la ciudad en formato lat,lon.

Ejemplo de solicitud:

GET /api/v1/current?city=51.509865,-0.118092

Respuesta exitosa:

{
  "weather": {...}
}

Obtener la previsión meteorológica

URL: /api/v1/forecast/:city?

Método: GET

Parámetros de URL:

city (opcional): Coordenadas de la ciudad en formato lat,lon.

Parámetros de consulta:

count (opcional): Número de días para la previsión.

Ejemplo de solicitud:

GET /api/v1/forecast?count=5&city=51.509865,-0.118092


Respuesta exitosa:

{
  "list": [...]
}


Manejo de errores

Si la solicitud no cumple con los esquemas de validación o si ocurre un error en el servidor, recibirás una respuesta de error:

Respuesta de error:

{
  "message": "Error message"
}

Ejemplos de errores:

400 Bad Request: Parámetros de entrada inválidos.
500 Internal Server Error: Error del servidor.

Tests

Para ejecutar los tests, utiliza el siguiente comando:

npm test

Esto ejecutará los tests definidos en el proyecto para asegurar que la API funcione correctamente.
```
