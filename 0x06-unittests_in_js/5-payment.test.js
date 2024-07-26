// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleLogSpy.restore();
  });

  it('log the correct message and call console.log once for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('log the correct message and call console.log once for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});
