import fetchAPI from "../fetchAPI";

export default async function getCouponDetails(coupon_code) {
  const data = await fetchAPI(
    `
    query CouponCode($where: JSON) {
        resubscribeCoupons(where: $where) {
          coupon_code
          discount_rate
          is_coupon_reedemed
          profile_subscribe_uuid
          profile{
            onlyFansURL
            current_subscribe_uuid
          }
        }
      }
    `,
    {
      variables: {
        where: {
          coupon_code
        }
      }
    }
  );

  return data?.resubscribeCoupons[0];
}
