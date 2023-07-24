import { useRef, useState } from 'react'
import classes from './vendorDashboard.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function VendorDashboard() {
    const { data: session, status } = useSession()
    const[setForm, SetsetForm] = useState(classes.close)
    const cnInputRef = useRef()
    const router = useRouter()

    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    function openForm(){
        SetsetForm(classes.open)
    }

    async function submitHandler(e) {
        e.preventDefault()
        const enteredcnInputRef = cnInputRef.current.value


        //creating the date of coupon request
        const date = new Date();

        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        // we will display the date as DD-MM-YYYY 

        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        let userEmail = session.user.username

        const data = {
            couponNumber: enteredcnInputRef,
            couponRequestDate: currentDate,
            email:userEmail ,

        }
        console.log(data)
        const response = await fetch('http://localhost:3000/api/vendor/vendor-coupon', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        let userData = await response.json()

        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

       


    }

    return (
        <div className={classes.section}>
            <div className={classes.welcome}>
                <p>Welcome Back, <span className={classes.span}>{session.user.prefferedUsername}!</span></p>

            </div>
            <div className={classes.coupons}>
                <div>
                    <p>SOLD COUPONS</p>
                    <h4>{session.user.soldCoupons}</h4>
                </div>
                <div>
                    <p>UNSOLD COUPONS</p>
                    <h4>{session.user.UnsoldCoupons}</h4>
                </div>
                <div>
                    <p>UNPAIN COUPONS</p>
                    <h4>{session.user.UpaidsoldCoupons}</h4>
                </div>

            </div>
            <div className={classes.sectionTwo}>
                <button onClick={openForm}>Request</button><button>Export CSV</button>
            </div>
            <div className={setForm}>
                <div className={classes.card}>

                    <form onSubmit={submitHandler} className={classes.form}>
                        <div className={classes.control}>


                            <label htmlFor="passport">Number of Coupon you can sell within the given time frame</label>
                            <input type='number'
                                required id="
                                couponsNumber"
                                name="
                                couponsNumber"
                                placeholder="eg: 12"
                                ref={cnInputRef} />

                        </div>


                        <div className={classes.actions}>
                            <button type="submit">Submit</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    )
}

export default VendorDashboard