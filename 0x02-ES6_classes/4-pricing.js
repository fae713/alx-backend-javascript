// Import the ClassRoom class
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Amount getter
  get amount() {
    return this._amount;
  }

  // Amount setter
  set amount(newAmount) {
    if (typeof newAmount === 'number') this._amount = newAmount;
  }

  // Currency getter
  get currency() {
    return this._currency;
  }

  // Currency Setter
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) this._currency = newCurrency;
  }

  // displays the full currency information
  displayFullPrice() {
    return `${this.amount} ${this.currency.name}  (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
