# Coupon applying and calculation library

- This is an extracted code snippet from the project built with ReactJS & NextJS

## Flow

- User receives a URL in the format of https://example.com/promote?coupon_code=eMjeTahF&discount_rate=20
- After the user clicks on the link, function *checkCouponValidation* checks if the coupon is redeemed, and if the user is authorized to use the coupon
- In case the coupon is valid, function *calculateDiscountRate* calculates the actual discount that the user has received
- New subscription plans with applied discount are displayed on the UI

## Demo
 
![alt text](https://github.com/Cox5/reactjs-coupon/blob/main/coupon_gif.gif "Discount coupon demo gif")
