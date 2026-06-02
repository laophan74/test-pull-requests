function calculateDiscountedTotal(items, coupon) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!coupon) {
    return subtotal;
  }

  if (coupon.type === 'percent') {
    return subtotal - subtotal * coupon.value;
  }

  if (coupon.type === 'fixed') {
    return subtotal - coupon.value;
  }

  return subtotal;
}

module.exports = {
  calculateDiscountedTotal,
};
