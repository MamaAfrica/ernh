import { useRef, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Spinner from "./icons/spinner";
import classes from './registration-form.module.css'
import data from '../pages/api/data'
import axios from 'axios';




const RegisterForm = () => {

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const [show, setShow] = useState(false)
    const [fisrtNameErr, setFisrtNameErr] = useState(' ')
    const [lastNameErr, setLastNameErr] = useState(' ')
    const [emailErr, setEmailErr] = useState(' ')
    const [password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, setSpinner] = useState(false)
    const [profilePicture, setProfilePicture] = useState(null);

    const firstNameInputRef = useRef()
    const lastnameInputRef = useRef()
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()
    const phoneInputRef = useRef()
    const countryInputRef = useRef()
    const couponInputRef = useRef()
    const packageInputRef = useRef()
    const imageInputRef = useRef()


    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }

    async function submitHandler(event) {
        event.preventDefault()





        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        const firstname = firstNameInputRef.current.value
        const lastname = lastnameInputRef.current.value
        const phone = phoneInputRef.current.value
        const country = countryInputRef.current.value
        const coupon = couponInputRef.current.value
        const packagec = packageInputRef.current.value
        const imageUse = imageInputRef.current.value

        // const data = {
        //     firstname: enteredFirstName,
        //     lastname: enteredLastName,
        //     username: enteredEmail,
        //     password: enteredPassword,
        //     phone: enteredPhoneInputRef,
        //     country: enteredCountryInputRef,
        //     coupon: enteredCouponInputRef,
        //     packagec: enteredPackageInputRef,
        // }
        //validation
        // Create a new FormData object
        // const formData = new FormData();
        // formData.append('firstname', firstname);
        // formData.append('lastname', lastname);
        // formData.append('password', password);
        // formData.append('phone', phone);
        // formData.append('email', username);
        // formData.append('country', country);
        // formData.append('coupon', coupon);
        // formData.append('packagec', packagec);
        // formData.append('profilePicture', profilePicture);
        // const formData = new FormData();
         
        // formData.append('profilePicture', profilePicture);

        if (username.length < 7) {
            setEmailErr('Email Lenght must be greater than 7')
            return;
        }
        if (firstname.length < 3) {
            setFisrtNameErr('Email Lenght must be greater than three')
            return;
        }
        if (lastname.length < 3) {
            setLastNameErr('Email Lenght must be greater than three')
            return;
        }
        if (!validPassword.test(password)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }
        setWaitMsg('Hold on for few seconds...')
        setSpinner(<Spinner />)
        console.log({ firstname, lastname, username, password, phone, country, coupon, packagec,profilePicture,imageUse })
        console.log(formData)
        // collection of data
        const response = await axios.post('api/register/registerForm', { firstname, lastname, username, password, phone, country, coupon, packagec,profilePicture,imageUse }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });




        // const response = await fetch('api/register/registerForm', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },

        // });
        let userData = await response.json()

        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

        router.push('/admin-login')
    }
    const handleDrop = (acceptedFiles) => {
        // Update profile picture state with the selected file
        setProfilePicture(acceptedFiles[0]);
    };

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
                            ref={usernameInputRef} />

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
                    <div className={classes.control}>
                        <label>
                            Profile Picture:
                            <input type="file" accept="image/*" ref={imageInputRef} />
                        </label>
                    </div>
                    <div className={classes.use}>
                        <p>By Using  Earn Hive Application Service, you agree to be bound by our <span className={classes.tandc}><Link href='/tandc' target='_blank'>Terms and Conditions</Link></span>. Earn Hive Application Service reserves the right to change the terms and conditions at any time without notice, and your continual use of Earn Hive Application Service constitutes your content to such changes </p><br />
                        <p>Do you agree  Earn Hive Application Service Privacy Policy?</p>
                        <div className={classes.itandc}>
                            <label htmlFor="agree">I agree</label>
                            <input type='checkbox' required id="agree" />
                        </div>

                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Register</button>
                    </div>
                    <div className={classes.acc}>
                        <p>Already have an Account? <Link href='/admin-login' target='_blank'>Login</Link></p>
                    </div>

                </form>


            </div>
        </div>
    );
}

export default RegisterForm;