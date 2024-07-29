export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Code getter
  get code() {
    return this._code;
  }

  // Code setter
  set code(newCode) {
    this._code = newCode;
  }

  // Name getter
  get name() {
    return this._name;
  }

  // Name setter
  set name(newName) {
    this._name = newName;
  }

  // display the full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
