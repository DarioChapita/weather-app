const Joi = require('joi');

const coordinatesSchema = Joi.object({
    lat: Joi.number().required().messages({
        'number.base': 'Latitude must be a number',
        'any.required': 'Latitude is required',
    }),
    lon: Joi.number().required().messages({
        'number.base': 'Longitude must be a number',
        'any.required': 'Longitude is required',
    })
});

const citySchema = Joi.object({
    city: Joi.string().pattern(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).optional().messages({
        'string.base': 'City must be a string',
        'string.pattern.base': 'City must be in the format "lat,lon"',
    })
});

const countSchema = Joi.object({
    count: Joi.number().integer().optional().messages({
        'number.base': 'Count must be a number',
        'number.integer': 'Count must be an integer',
    })
});

const combinedSchema = Joi.object({
    city: Joi.string().pattern(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/).optional().messages({
        'string.base': 'City must be a string',
        'string.pattern.base': 'City must be in the format "lat,lon"',
    }),
    count: Joi.number().integer().optional().messages({
        'number.base': 'Count must be a number',
        'number.integer': 'Count must be an integer',
    }),
    date: Joi.date().optional().messages({
        'date.base': 'Date must be a valid date',
    }),
    units: Joi.string().valid('metric', 'imperial').optional().messages({
        'string.base': 'Units must be a string',
        'any.only': 'Units must be either "metric" or "imperial"',
    }),
    locations: Joi.array().items(coordinatesSchema).optional().messages({
        'array.base': 'Locations must be an array of coordinates',
    })
});

module.exports = {
    coordinatesSchema,
    citySchema,
    countSchema,
    combinedSchema,
};
