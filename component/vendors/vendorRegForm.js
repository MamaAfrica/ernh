import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Spinner from "@/component/icons/spinner";


import classes from '../../pages/ernhv/earnhv.module.css'





const VendorRegistration = () => {

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


    const [show, setShow] = useState(false)
    const [emailErr, setEmailErr] = useState(' ')
    const [password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [puErr, setPuErr] = useState(' ')
    const [spinner, setSpinner] = useState(false)

    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const phoneInputRef = useRef()
    const pUInputRef = useRef()
    const passportInputRef = useRef()
    const linkInputRef = useRef()
    const bankInputRef = useRef()
    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }

    async function submitHandler(event) {
        event.preventDefault()
        const enteredFirstname = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value
        const enteredpUInputRef = pUInputRef.current.value
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value
        const enteredPassport = passportInputRef.current.value
        const enteredLink = linkInputRef.current.value
        const enteredBank = bankInputRef.current.value


        //validation
        if (enteredpUInputRef.length < 6) {
            setPuErr('Preferred Username mUst be at least Seven Characters')
            return;
        }
        if (enteredEmail.length < 15) {
            setEmailErr('Email Lenght must be greater than Fifteen')
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
            firstname: enteredFirstname,
            lastname: enteredLastName,
            username: enteredEmail,
            password: enteredPassword,
            prefferedUsername: enteredpUInputRef,
            phone: enteredPhone,
            passport: enteredPassport, 
            link:enteredLink, 
            bank: enteredBank, 
            role: 'vendor'

        }
        console.log(data)
        const response = await fetch('https://earnhive.net/api/vendor/vendor-register', {
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

        router.push('/ernhv/ernhvLogin')
    }




    return (

        <div className={classes.section}>
            <h2>Vendor Registration</h2>
            <div className={classes.card}>
                <div className={classes.figure}>
                    <img src="../../vendor.png" alt="cartoon on laptop" />
                </div>
                <form onSubmit={submitHandler} className={classes.form}>
                    <div className={classes.control}>
                        {spinner}
                        <h3>{waitMsg}</h3>
                        <label htmlFor="firstname">Firstname</label>
                        <input type='text'
                            required id="firstname"
                            name="firstname"
                            placeholder="John"
                            ref={firstNameInputRef} />

                    </div>
                    <div className={classes.control}>

                        <label htmlFor="Lastname">Lastname</label>
                        <input type='text'
                            required id="lastname"
                            name="lastname"
                            placeholder="Doe"
                            ref={lastNameInputRef} />

                    </div>
                    <div className={classes.control}>
                        {puErr}
                        <label htmlFor="PrefferedUsername">Preffered Username</label>
                        <input type='text'
                            required id="PrefferedUsername"
                            name="PrefferedUsername"
                            placeholder="Doedev"
                            ref={pUInputRef} />

                    </div>
                    <div className={classes.control}>
                        <div>
                            {emailErr}
                        </div>

                        <label htmlFor="username">Email</label>
                        <input type='text'
                            required id="username"
                            name="username"
                            placeholder="jsmith@gmail.com"
                            ref={emailInputRef} />

                    </div>
                    <div className={classes.control}>

                        <label htmlFor="phone">Phone Number</label>
                        <input type='tel'
                            required id="phone"
                            name="phone"
                            placeholder="090xxxxxx234"
                            ref={phoneInputRef} />

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

                        <label htmlFor="passport">Profile Image</label>
                        <input type='url'
                            required id="passport"
                            name="passport"
                            placeholder="http://...."
                            ref={passportInputRef} />

                    </div>
                    <div className={classes.control}>

                        <label htmlFor="link">Vendor WhatsApp Link</label>
                        <input type='url'
                            required id="link"
                            name="link"
                            placeholder="http://...."
                            ref={linkInputRef} />

                    </div>
                    <div className={classes.control}>

                        <label htmlFor="bank">Vendor Bank</label>
                        <input type='text'
                            required id="bank"
                            name="bank"
                            placeholder="eg: UBA "
                            ref={bankInputRef} />

                    </div>

                    <div className={classes.actions}>
                        <button type="submit">Register</button>
                    </div>

                    <p>Forgot Password?</p><br /><br />
                    <p>You do not have an Account? <Link href='/ernhv/ernhvLogin' target='_blank'>Login</Link></p>

                </form>

            </div>
        </div>

    );
}

export default VendorRegistration;