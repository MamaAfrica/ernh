import { useRef, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Spinner from "@/component/icons/spinner";
import classes from '../registration-form.module.css'
import data from '../api/data'




const Referral = () => {
    // console.log(data)
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const [show, setShow] = useState(false)
    const [fisrtNameErr, setFisrtNameErr] = useState(' ')
    const [lastNameErr, setLastNameErr] = useState(' ')
    const [emailErr, setEmailErr] = useState(' ')
    const [password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, setSpinner] = useState(false)

    const firstNameInputRef = useRef()
    const lastnameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const phoneInputRef = useRef()
    const countryInputRef = useRef()
    const couponInputRef = useRef()
    const packageInputRef = useRef()


    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }
    const { refUsername } = router.query

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value
        const enteredLastName = lastnameInputRef.current.value
        const enteredPhoneInputRef = phoneInputRef.current.value
        const enteredCountryInputRef = countryInputRef.current.value
        const enteredCouponInputRef = couponInputRef.current.value
        const enteredPackageInputRef = packageInputRef.current.value
        //validation


        if (enteredEmail.length < 7) {
            setEmailErr('Email Lenght must be greater than 7')
            return;
        }
        if (enteredFirstName.length < 3) {
            setFisrtNameErr('Email Lenght must be greater than three')
            return;
        }
        if (enteredLastName.length < 3) {
            setLastNameErr('Email Lenght must be greater than three')
            return;
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }
        setWaitMsg('Hold on for few seconds...')
        setSpinner(<Spinner />)
      
        // collection of data
         const data = {
            firstname: enteredFirstName,
            lastname: enteredLastName,  
            username: enteredEmail,
            password: enteredPassword,
            phone:enteredPhoneInputRef,
            country:enteredCountryInputRef,
            coupon:enteredCouponInputRef,
            packagec:enteredPackageInputRef,
            role:'User',
            welcomeBonus:2000,
            referalBonus:0,
            indirectReferalBonus: 0,
            secondIndirectRBonus:0,
            hivepostOne:0,
            hivepostTwo:0,
            dailyLogin:0,
            hiveGame:0,
            referral:refUsername
         }
        const response = await fetch('api/register/registerForm', {
            method: 'POST',
            body: JSON.stringify( data ),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        console.log(data)
        let userData = await response.json()

        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

        router.push('/login')
    }
    
  


    return (
        <div className={classes.section}>
            <h2>Joining Under {refUsername}</h2>

            <div className={classes.card}>
                <div className={classes.figure}>
                    <img src="https://media.istockphoto.com/id/1257998329/vector/young-afro-american-man-sitting-on-the-chair-at-home-interior-and-working-with-laptop-vector.jpg?s=612x612&w=0&k=20&c=HHHYOCX39w0GCoyqRTfOorDBkLxPT2DhLzN8_B1bAv4=" alt="cartoon on laptop" />
                </div>
                <form onSubmit={submitHandler} className={classes.form}>

                    <div className={classes.control}>
                        {spinner}
                        <h3>{waitMsg}</h3>
                        <label htmlFor="firstname">First Name</label>
                        <input type='text'
                            required id="text"
                            name="firstname"
                            ref={firstNameInputRef} />

                    </div>
                    <div>
                        {fisrtNameErr}
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="lastname">Lastname</label>
                        <input type='text'
                            required id="lastname"
                            name="lastname"
                            ref={lastnameInputRef} />

                    </div>
                    <div>
                        {lastNameErr}
                    </div>

                    <div className={classes.control}>

                        <label htmlFor="email">Email</label>
                        <input type='email'
                            required id="email"
                            name="username"
                            ref={emailInputRef} />

                    </div>
                    <div>
                        {emailErr}
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>

                        <input type={show ? "text" : "password"}
                            required id="password"
                            name="password"
                            ref={passwordInputRef} />

                        <div className={classes.span}>
                            < span onClick={setFnc} className={classes.actions}>{show ? "Hide" : "Show"}</span>
                        </div>


                        <div>
                            {password}
                        </div>
                    </div>
                    <div className={classes.control}>

                        <label htmlFor="phone">Phone Number</label>
                        <input type='tel'
                            required id="phone"
                            name="phone"
                            ref={phoneInputRef}
                        />

                    </div>
                    <div className={classes.control}>
                        <label htmlFor="country">Select Your Country</label>
                        <select
                            id='country'
                            name='country'
                            required
                            ref={countryInputRef}


                        >
                            <option>--Select State--</option>
                            {data.map((el) => {
                                return (
                                    <option key={el.code}>{el.name}</option>
                                )
                            })}

                        </select>


                    </div>

                    <div className={classes.control}>

                        <label htmlFor="coupon">Coupon Code</label>
                        <input type='text'
                            required id="coupon"
                            name="coupon"
                            ref={couponInputRef}
                        />
                        <h4>Dont Have Code?<span className={classes.getCode}><Link href='/activation-code'>Get Code</Link></span>  </h4>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="package">Choose Your Package</label>
                        <select
                            id='package'
                            name="packagec"
                            required
                            ref={packageInputRef}
                        >
                            <option>Hivenaira N 4000</option>
                        </select>


                    </div>
                    <div className={classes.use}>
                        <p>By Using  Earn Hive Application Service, you agree to be bound by our <span className={classes.tandc}><Link href='/tandc' target='_blank'>Terms and Conditions</Link></span>. Earn Hive Application Service reserves the right to change the terms and conditions at any time without notice, and your continual use of Earn Hive Application Service constitutes your content to such changes </p><br/>
                        <p>Do you agree  Earn Hive Application Service Privacy Policy?</p>
                        <div className={classes.itandc}>
                        <label htmlFor="agree">I agree</label>
                        <input type='checkbox' required  id="agree" />
                        </div>
                      
                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Register</button>
                    </div>
                    <div className={classes.acc}>
                        <p>Already have an Account? <Link href='/login' target='_blank'>Login</Link></p>
                    </div>

                </form>


            </div>
        </div>
    );
}

export default Referral;