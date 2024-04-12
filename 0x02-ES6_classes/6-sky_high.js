import Building from "./5-building";

class SkyHighBuilding {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }
  evacuationWarnigMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
