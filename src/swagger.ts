const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "SOLID API Exercise",
    description: "Building SOLID exercise API documentation.",
  },
  host: "localhost:3333",
  schemes: ["http"],
};

const outputFile = "./src/swagger-output.json";
const endpointsFiles = ["./src/index.ts"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
