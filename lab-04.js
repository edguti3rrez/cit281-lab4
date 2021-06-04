/*
    CIT 281 Lab 4
    Name: Edwin Gutierrez
*/

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});

// Second name route
fastify.get("/name", (request, reply) => {

    //getting information from request:
    const { first, last } = request.query;

    // determines if query values were provided, if not default to "Guest"
    const queryName = first && last ? `${first} ${last}` : "Guest";

    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Hello, ${queryName}</h1>`);
  });

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});