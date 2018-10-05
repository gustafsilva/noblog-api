const apiAction = require("../actions/ApiAction");

module.exports = (server) => {
  server.get("/", apiAction.getApiInfo);
};