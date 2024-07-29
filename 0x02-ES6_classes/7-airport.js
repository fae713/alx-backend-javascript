export default class Airport {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
