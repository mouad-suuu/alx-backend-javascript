const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber");
    consoleSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it("should log the correct total for 100 and 20", () => {
    calculateNumberStub.returns(120);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, "The total is: 120");
  });

  it("should log the correct total for 10 and 10", () => {
    calculateNumberStub.returns(20);

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, "The total is: 20");
  });
});
