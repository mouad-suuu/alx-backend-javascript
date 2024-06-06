const assert = require("assert");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a successful response for true", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, {
          data: "Successful response from the API",
        });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it("should return undefined for false", (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        assert.strictEqual(response, undefined);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
