const restify = require("restify");

const apiRoutes = require("./routes/index");

const server = restify.createServer();
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

apiRoutes(server);

module.exports = server;