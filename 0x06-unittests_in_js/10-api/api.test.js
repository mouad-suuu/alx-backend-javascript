const { expect } = require("chai");
const request = require("request");

describe("Login endpoint", () => {
  it("Correct response for POST /login", (done) => {
    request.post(
      "http://localhost:7865/login",
      { json: { userName: "Betty" } },
      (error, response, body) => {
        if (error) throw new Error(error);
        expect(body).to.equal("Welcome Betty");
        done();
      }
    );
  });
});

describe("Available payments endpoint", () => {
  it("Correct response for GET /available_payments", (done) => {
    request(
      "http://localhost:7865/available_payments",
      (error, response, body) => {
        if (error) throw new Error(error);
        expect(body).to.deep.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      }
    );
  });
});
