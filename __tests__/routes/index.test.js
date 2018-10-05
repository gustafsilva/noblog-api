const request = require("supertest");
const server = require("../../src/server");

describe("Routes for informations API", () => {
  test("Capturing API information [STATUS: 200]", () => {
    return request(server)
      .get("/")
      .expect(200);
  });

  test("Capturing API information response [status='ok']", () => {
    return request(server)
      .get("/")
      .expect(200)
      .then(response => {
        expect(response.body.status).toEqual("ok");
      });
  });
});