import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import classes from './couponChecker.module.css'
 





const CouponForm = () => {
    const router = useRouter()
    const [errMsg, setErrMsg] = useState("")
    const [codeErr, setCodeErr] = useState("")
    
    const couponInputRef = useRef()
    // let codeErr;
    async function submitHandler(event) {
        event.preventDefault()
        const coupon = couponInputRef.current.value;
        
        if ((coupon.length === 24 || coupon.length ===25 ) && coupon.slice(-2)==='UC') {
            setErrMsg(<p className={classes.green}>Please hold on...</p>)
        } else {
            setErrMsg(<p className={classes.red}>Please provide a valid Coupon</p>)
            return;
        }
        

        const response = await fetch('http://localhost:3000/api/userCoupon/coupon-form', {
            method: 'POST',
            body: JSON.stringify({coupon}),
            headers: {
                'Content-type': 'application/json'
            },

        });
        let user = await response.json()

       
        if (!response.ok) {
            setCodeErr(<p className={classes.red}>{user.message}</p>)
            setErrMsg(" ")
            // codeErr = user.message
            // throw new Error(user.message || 'something went wrong')
        } else if(response.ok){
            setCodeErr(<p className={classes.green}>{user.message}</p>)
            setErrMsg(" ")
            // codeErr = user.message
            // throw new Error(user.message || 'something went wrong')
        }



    }

    return (

        <div className={classes.section}>

            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                    <div className={classes.control}>
                        {errMsg}
                        {codeErr}
                        <label htmlFor="coupon">Check Your Code</label>
                        <input type='text'
                            required id="coupon"
                            name="coupon"
                           placeholder="Kindly Paste Your Code Here..."
                            ref={couponInputRef} />
                         
                    </div>


                    <div className={classes.actions}>
                        <button type="submit">Submit</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default CouponForm;