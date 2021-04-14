import getCouponDetails from "@/lib/discountCoupons/getCouponDetails";
import checkCouponValidation from "@/lib/discountCoupons/checkCouponValidation";
import createSubscriptionPlansWithDiscount from "@/lib/discountCoupons/createSubscriptionPlansWithDiscount";

async function applyCouponDiscount(coupon_code, discount_rate, subscriptionPlans) {
  const coupon = await getCouponDetails(coupon_code);
  if (checkCouponValidation(coupon, discount_rate)) {
    const discountedSubscriptionPlans = createSubscriptionPlansWithDiscount(
      subscriptionPlans,
      coupon.discount_rate,
      coupon
    );
    return discountedSubscriptionPlans;
  } else {
    throw new Error(`Cannot apply coupon code: ${coupon_code}`);
  }
}

export default applyCouponDiscount;
