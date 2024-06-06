// 1-calcul.test.js
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber("SUM", -1.2, -3.7), -5);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the subtraction of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber("SUBTRACT", 3.7, 1.2), 3);
      assert.strictEqual(calculateNumber("SUBTRACT", -3.7, -1.2), -3);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of two rounded numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber("DIVIDE", 4.5, 1.4), 5);
    });

    it('should return "Error" if rounded divisor is 0', () => {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.4), "Error");
    });
  });

  describe("Invalid type", () => {
    it("should throw an error if type is invalid", () => {
      assert.throws(
        () => calculateNumber("MULTIPLY", 1.4, 4.5),
        Error,
        "Invalid type"
      );
    });
  });
});
