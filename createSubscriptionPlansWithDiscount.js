import calculateDiscountRate from "@/lib/discountCoupons/calculateDiscountRate";

const createSubscriptionPlansWithDiscount = (plans, rate, coupon) => {
  let plansWithDiscount = [];
  plans.forEach((plan) => {
    let updatedPlan = {
      ...plan,
      discountPrice: calculateDiscountRate(plan.price, rate),
      coupon_code: coupon.coupon_code,
      onlyFansURL: coupon.profile.onlyFansURL
    };
    plansWithDiscount.push(updatedPlan);
  });
  return plansWithDiscount;
};

export default createSubscriptionPlansWithDiscount;
