<h1 align="center">Weather Application Development Test</h1>

Las tecnologías a utilizar son **NodeJS**, **ReactJS** o **React Native**. En el caso de preferir **React Native (RN)**, utilizarlo de manera nativa (sin expo).

La siguiente prueba plantea el desarrollo de una aplicación de consulta de clima que pueda visualizar el pronóstico actual y los próximos 5 días para la ciudad actual y otras 5 ciudades seleccionables. Además del desarrollo específico de las funcionalidades, se requiere identificar y generar los casos de test que se consideren necesarios.

La entrega del código se espera que se realice en algún repositorio público (por ejemplo, GitHub). Para aquellos perfiles que apliquen como FullStack, se deben completar ambas partes de la prueba. Caso contrario, pueden solo realizar la parte que corresponde (armar la solución entera puede ser un extra).

Se recomienda utilizar el servicio API de weather **Open Weather Map**, pero se puede usar cualquier otro de preferencia.

## Sugerencia de Servicios/Librerías

- **Supertest** (recomendado)
- **Should** (recomendado)
- **ip-api** (recomendado)

Se pueden usar cualquier otras librerías que consideren de utilidad, aunque recomendamos el uso de **Redux** y **Redux-Saga**. Cualquier información relevante la deben agregar al README del proyecto.

Tomate tu tiempo, y demuestra tus conocimientos pensando en la estructura y el trabajo en equipo.

## Backend Test

Preferentemente desarrollar sobre **NodeJS**.

Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en diferentes endpoints. Se requiere realizar tests con las librerías antes mencionadas o con equivalentes.

A continuación se detallan los endpoints que deben ser implementados:

### Ruta Base

`/v1`

### Endpoints

#### /location

Devuelve los datos de ubicación `city` según ip-api.

#### /current[/city]

`city` es un parámetro opcional. Devuelve los datos de ubicación `city` o la ubicación actual según ip-api y el estado del tiempo actual.

#### /forecast[/city]

`city` es un parámetro opcional. Devuelve los datos de ubicación `city` o la ubicación actual según ip-api y el estado del tiempo a 5 días.
