const apiController = require("../../src/controllers/ApiController");

describe("Api Controller", () => {
  const infoApiValid = {
    version: "1.0.0",
    status: "ok"
  };

  test("Get info api status", () => {
    const info = apiController.getApiInfo();
    expect(info).toEqual(infoApiValid);
  });
});