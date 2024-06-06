const { expect } = require("chai");
const request = require("request");

describe("Index page", () => {
  it("Correct status code?", (done) => {
    request("http://localhost:7865", (error, response) => {
      if (error) throw new Error(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("Correct result?", (done) => {
    request("http://localhost:7865", (error, response, body) => {
      if (error) throw new Error(error);
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});
