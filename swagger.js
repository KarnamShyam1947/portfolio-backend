const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Shyam's Dynamic Portfolio API", version: "1.0.0" },
  },
  apis: [
    "./routes/*.js",
    "./config/*.js"
  ],
});

module.exports = { swaggerUi, swaggerSpec };
