const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: "Shyam's Dynamic Portfolio API",
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [],
  },
  apis: [
    "./routes/*.js",
    "./config/*.js"
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
