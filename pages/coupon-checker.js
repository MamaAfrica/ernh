import CouponForm from "@/component/users/couponCheckerForm";
import classes from './coupon.module.css'

 
const CouponChecker = () => {
    return ( 
        <div className={classes.coupon}>
             <CouponForm/>
        </div>
     );
}
 
export default CouponChecker;