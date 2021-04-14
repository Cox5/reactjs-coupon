export default function checkifCouponIsValid(coupon, discountRate) {
  let retVal = false;
  if (!coupon.is_coupon_reedemed) {
    if (coupon.discount_rate == discountRate) {
      if (coupon.profile_subscribe_uuid === coupon.profile.current_subscribe_uuid) {
        retVal = true;
      }
    }
  }
  return retVal;
}
