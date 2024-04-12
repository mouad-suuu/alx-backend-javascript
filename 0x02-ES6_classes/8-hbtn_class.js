export default class HolbertonClass {
  constructor(size, location, teacher) {
    this.size = size;
    this.location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
