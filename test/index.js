const http = require("http");
const assert = require("assert");

const server = require("../server");

/* eslint-disable no-undef */

// To test if server is up and running
describe("Test Identity Management API server is up", () => {
  it("should return 200", (done) => {
    http.get("http://127.0.0.1:4000", (res) => {
      assert.equal(200, res.statusCode);
      server.close();
      done();
    });
  });
});
