const { calculateDiscountedTotal } = require('./discountCalculator');

function runDiscountCalculatorTests() {
  const total = calculateDiscountedTotal(
    [
      { price: 20, quantity: 2 },
      { price: 10, quantity: 1 },
    ],
    { type: 'percent', value: 0.1 },
  );

  if (total !== 45) {
    throw new Error(`Expected discounted total to be 45, got ${total}`);
  }
}

runDiscountCalculatorTests();
