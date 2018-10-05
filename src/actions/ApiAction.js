const apiController = require("../controllers/ApiController");

module.exports = {
  getApiInfo: (request, response) => {
    const info = apiController.getApiInfo();
    if(info) {
      response.send(200, info);
    } else {
      response.send(500, info);
    }
  }
};