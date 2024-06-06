const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  it("should call Utils.calculateNumber with type SUM and correct arguments", () => {
    const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberSpy, "SUM", 100, 20);

    calculateNumberSpy.restore();
  });
});
