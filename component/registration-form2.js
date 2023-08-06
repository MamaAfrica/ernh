import { useRef, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Spinner from "./icons/spinner";
import classes from './registration-form.module.css'
import data from '../pages/api/data'




const RegisterForm = () => {
    // console.log(data)
    // const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  const[checkBtn, setCheckBtn] = useState(true)
    const [show, setShow] = useState(false)
    const [fisrtNameErr, setFisrtNameErr] = useState(' ')
    const [lastNameErr, setLastNameErr] = useState(' ')
    const [emailErr, setEmailErr] = useState(' ')
    const [pUsernameErr, setPusernameErr] = useState(' ')
    const [couponErr, setCouponErr] = useState(' ')
    const [password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, setSpinner] = useState(false)

    const firstNameInputRef = useRef()
    const lastnameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const pUsernameInputRef = useRef()
    const phoneInputRef = useRef()
    const countryInputRef = useRef()
    const couponInputRef = useRef()
    const packageInputRef = useRef()


    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }
     

    async function submitHandler(event) {
        event.preventDefault()
        setCheckBtn(false)
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value
        const enteredLastName = lastnameInputRef.current.value
        const enteredPhoneInputRef = phoneInputRef.current.value
        const enteredPUsernameInputRef = pUsernameInputRef.current.value
        const enteredCountryInputRef = countryInputRef.current.value
        const enteredCouponInputRef = couponInputRef.current.value
        const enteredPackageInputRef = packageInputRef.current.value
        //validation


        if (enteredEmail.length < 10) {
            setEmailErr('Email Lenght must be greater than ten')
            return;
        } else {
            setEmailErr(' ')
        }
        if (enteredFirstName.length < 3) {
            setFisrtNameErr('Firstname Lenght must be greater than three')
            return;
        } else {
            setFisrtNameErr(' ')
        }
        if (enteredLastName.length < 3) {
            setLastNameErr('Lastname Lenght must be greater than three')
            return;
        } else {
            setLastNameErr(' ')
        }

        if ((enteredCouponInputRef.length === 24 || enteredCouponInputRef.length === 25) && enteredCouponInputRef.slice(-2) === 'UC') {
            setCouponErr(<p className={classes.green}>Please hold on...</p>)
        } else {
            setCouponErr(<p className={classes.red}>Please provide a valid Coupon</p>)
            return;
        }




        if (enteredPUsernameInputRef.length < 3 || enteredPUsernameInputRef.includes(' ')) {
            setPusernameErr('Preffered Username Lenght must be greater than three and should not have space')
            return;
        }
        if (enteredPassword.length < 6 || enteredPassword.includes(' ')) {
            setPassErr('Password length must be greater than six and must not have space')
            return;
        }
        // if (!validPassword.test(enteredPassword)) {
        //     setPassErr('Password must contain special character(s), and  uppercase');
        //     return;
        // } else {
        //     setPassErr('Good Password');
        // }

        //picking the date of registration
        // Date object
        const date = new Date();

        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        // we will display the date as DD-MM-YYYY 

        let currentDate = `${currentDay}${currentMonth}${currentYear}`;
        let signUpDate = `${currentDay}-${currentMonth}-${currentYear}`;

        const pin = Math.floor(Math.random() * 4000) + 4000


        // collection of data
        const data = {
            firstname: enteredFirstName,
            lastname: enteredLastName,
            username: enteredEmail,
            password: enteredPassword,
            phone: enteredPhoneInputRef,
            prefferedUsername: enteredPUsernameInputRef,
            country: enteredCountryInputRef,
            coupon: enteredCouponInputRef,
            packagec: enteredPackageInputRef,
            role: 'User',
            welcomeBonus: 2000,
            referalBonus: 0,
            indirectReferalBonus: 0,
            secondIndirectRBonus: 0,
            hivepostOne: 0,
            hivepostTwo: 0,
            dailyLogin: 300,
            hiveGame: 0,
            totalWithdrawal: 0,
            withdrawalType: 'none',
            requestedWithdrawal: 0,
            withdrawalRequestDate: 'none',
            bank: 'You are yet choose your preferred bank',
            accountNumber: '0',
            bankName: 'You are yet to do your bank setup',
            passport: 'none',
            pin: pin,
            registeredDate: Number(currentDate),
            loginDate: Number(currentDate),
            referral: 'Admin',
            signUpDate: signUpDate,

        }
        const response = await fetch('https://www.earnhive.net/api/register/registerForm', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        console.log(data)
        let user = await response.json()

        if (!response.ok) {
            if (user.message === 'This Email has already been  used by someone else please use another one') {
                setEmailErr(<p className={classes.red}>{user.message}</p>)
                return
            } else if (user.message === 'This Preffered Username has already been used by someone else please use another one') {
                setPusernameErr(<p className={classes.red}>{user.message}</p>)
                return
            } else if (user.message === 'Coupon has been used') {
                setCouponErr(<p className={classes.red}>{user.message}</p>)
                return
            }


            // codeErr = user.message
            // throw new Error(user.message || 'something went wrong')
        } else if (response.ok) {
            setCouponErr(<p className={classes.green}>{user.message}</p>)

            // codeErr = user.message
            // throw new Error(user.message || 'something went wrong')
        }
        setWaitMsg('Hold on for few seconds...')
        setSpinner(<Spinner />)
        router.push('/login')
    }


    return (
        <div className={classes.section}>
            <h2>Joining Under Admin</h2>

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
                        <p className={classes.red}>{fisrtNameErr}</p>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="lastname">Lastname</label>
                        <input type='text'
                            required id="lastname"
                            name="lastname"
                            ref={lastnameInputRef} />

                    </div>
                    <div>
                        <p className={classes.red}> {lastNameErr}</p>

                    </div>

                    <div className={classes.control}>

                        <label htmlFor="email">Email</label>
                        <input type='email'
                            required id="email"
                            name="username"
                            ref={emailInputRef} />

                    </div>
                    <div>
                        <p className={classes.red}>   {emailErr}</p>

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
                            <p className={classes.red}> {password}</p>

                        </div>
                    </div>
                    <div className={classes.control}>

                        <label htmlFor="phone">Phone Number</label>
                        <input type='text'
                            required id="phone"
                            name="phone"
                            ref={phoneInputRef}
                        />

                    </div>
                    <div className={classes.control}>

                        <label htmlFor="phone">Preffered Username</label>
                        <input type='text'
                            required id="pUsername"
                            name="pUsername"
                            ref={pUsernameInputRef}
                        />
                        <div>
                            <p className={classes.red}>  {pUsernameErr}</p>

                        </div>
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
                        {couponErr}
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
                            <option>Hivenaira N 4500</option>
                        </select>


                    </div>
                    <div className={classes.use}>
                        <p>By Using  Earn Hive Application Service, you agree to be bound by our <span className={classes.tandc}><Link href='/tandc' target='_blank'>Terms and Conditions</Link></span>. Earn Hive Application Service reserves the right to change the terms and conditions at any time without notice, and your continual use of Earn Hive Application Service constitutes your content to such changes </p><br />
                        <p>Do you agree  Earn Hive Application Service Privacy Policy?</p>
                        <div className={classes.itandc}>
                            <label htmlFor="agree">I agree</label>
                            <input type='checkbox' required id="agree" />
                        </div>

                    </div>
                    {checkBtn?<div className={classes.actions}>
                        <button type="submit"   >Register</button>
                    </div>:<div className={classes.submitted}>
                        <button type="submit" disabled  >Register</button>
                    </div>}
                    <div className={classes.acc}>
                        <p>Already have an Account? <Link href='/login' target='_blank'>Login</Link></p>
                    </div>

                </form>


            </div>
        </div>
    );
}

export default RegisterForm;