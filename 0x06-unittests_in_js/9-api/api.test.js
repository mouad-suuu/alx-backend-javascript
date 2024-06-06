const { expect } = require("chai");
const request = require("request");

describe("Cart page", () => {
  it("Correct status code when :id is a number?", (done) => {
    request("http://localhost:7865/cart/12", (error, response) => {
      if (error) throw new Error(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("Correct status code when :id is NOT a number (=> 404)?", (done) => {
    request("http://localhost:7865/cart/hello", (error, response) => {
      if (error) throw new Error(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
