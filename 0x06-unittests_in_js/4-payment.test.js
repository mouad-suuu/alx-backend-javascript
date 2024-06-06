const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it("should call Utils.calculateNumber with type SUM and correct arguments", () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberStub, "SUM", 100, 20);
  });

  it("should log the correct message", () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, "The total is: 10");
  });
});
