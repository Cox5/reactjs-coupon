const calculateDiscountRate = (price, discountRate) => {
  if (isNaN(discountRate)) {
    return price;
  } else {
    if (discountRate <= 100 && discountRate >= 0) {
      let newPrice = price - (price * discountRate) / 100;
      return Math.round(newPrice * 100) / 100;
    } else {
      return price;
    }
  }
};

export default calculateDiscountRate;
