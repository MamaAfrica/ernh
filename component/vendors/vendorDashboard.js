import { useRef, useState } from 'react'
import classes from './vendorDashboard.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import ShufflingAdmin from './shufflingAdmin'

function VendorDashboard() {
    const { data: session, status } = useSession()
    const [setForm, SetsetForm] = useState(classes.close)
    const cnInputRef = useRef()
    const router = useRouter()


    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    function openForm() {
        SetsetForm(classes.open)
    }
    //putting all coupouns together
    let allCoupons
    let createdCoupons
    let cCoupons
    let unused
    let used
    if (session.user.approvedCoupons.length > 1) {

        createdCoupons = [].concat(...session.user.approvedCoupons)
        //removing the unwanted "0"
        let cleanedCoupons = createdCoupons.slice(1, 100000)
        cCoupons = session.user.usedCoupons.slice(1, 100000)

        allCoupons = [...cleanedCoupons]

        unused = allCoupons.filter((el) => {
            if (!(cCoupons.includes(el.slice(0, 24).trim()))) {
                return el
            }
        })
        used = allCoupons.filter((el) => {
            if (cCoupons.includes(el.slice(0, 24).trim())) {
                return el
            }
        })


    }


    // if(session.user)
    // console.log(session.user.coupons[1])
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
            email: userEmail,

        }
        // console.log(data)
        const response = await fetch('https://www.earnhive.net/api/vendor/vendor-coupon', {
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
        router.reload()



    }

    return (
        <div className={classes.section}>
            <div className={classes.welcome}>
                <p>Welcome Back, <span className={classes.span}>{session.user.prefferedUsername}!</span></p>

            </div>
            <div className={classes.coupons}>
                <div>
                    <p>SOLD COUPONS</p>
                    <h4>N {(session.user.usedCoupons.length - 1) * 4500}</h4>
                </div>
                <div>
                    <p>UNSOLD COUPONS</p>
                    <h4>
                        {session.user.approvedCoupons.length > 1 ?
                            <p>N {(((createdCoupons.length - 1) - (session.user.usedCoupons.length - 1)) * 4500)}</p> : 0
                        }
                    </h4>
                </div>
                <div>
                    <p>UNPAID COUPONS</p>
                    <h4>N {(session.user.couponsNumber) * 4500}</h4>
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
                            <div className={classes.formControl}>
                                <input type='number'
                                    required id="
                                couponsNumber"
                                    name="
                                couponsNumber"
                                    placeholder="eg: 12"
                                    ref={cnInputRef} />
                            </div>


                        </div>


                        <div className={classes.actions}>
                            <button type="submit">Submit</button>
                        </div>


                    </form>

                </div>
            </div>
            {session.user.approvedCoupons.length > 1 ? <div className={classes.couponTable}>
                <h3>Unused Coupon</h3>
                <table>

                    <tr>
                        <th>S/N</th>
                        <th>Code</th>
                        <th>Date</th>
                        <th>Value</th>
                    </tr>

                    {unused.map((el, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{el.slice(0, 24).trim()}</td>
                            <td>{el.slice(el.indexOf(' '), 100)}</td>

                            <td>4500</td>



                        </tr>
                    ))}
                </table>
                {/* ensuring the used coupons table starts showing when neccessary */}
                {session.user.usedCoupons.length > 1 ? <div>
                    <h3>Used Coupon</h3>
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>Code</th>
                            <th>Date</th>
                            <th>Value</th>


                        </tr>
                        {used.map((el, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{el.slice(0, 24).trim()}</td>
                                <td>{el.slice(el.indexOf(' '), 100)}</td>

                                <td>4500</td>



                            </tr>
                        ))}
                    </table>
                </div> : " "}


            </div> : ""}


         
              <ShufflingAdmin/>

            </div>
      
    )
}

export default VendorDashboard