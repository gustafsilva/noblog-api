const server = require("./src/server");
const log = require("ak-logger");

const port = 3000;

server.listen(port, () => {
  log.info({server: "localhost", port: port}, "Server");
});