import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';

import classes from './profileimage.module.css'





const ChangePassword = () => {
    const router = useRouter()
    const [passCheck, setPassCheck] = useState(" ")
     

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const newPassportInputRef = useRef()

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enterednewPassword = newPassportInputRef.current.value;

        if (enteredPassword === enterednewPassword) {
            setPassCheck("Password Matched, please hold")
        } else {
            setPassCheck("Password do not Match")
        }

        const response = await fetch('http://localhost:3000/api/changePass/password', {
            method: 'POST',
            body: JSON.stringify({ enteredEmail, enteredPassword, enterednewPassword }),
            headers: {
                'Content-type': 'application/json'
            },

        });
        let user = await response.json()
        console.log(user)

        router.reload()

    }

    return (

        <div className={classes.section}>

            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                    <h3>{passCheck}</h3>
                     <div className={classes.control}>


                        <label htmlFor="email">Email</label>
                        <input type='email'
                            required id="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            ref={emailInputRef} />

                    </div>
                    <div className={classes.control}>


                        <label htmlFor="password">New Password</label>
                        <input type='password'
                            required id="passpord"
                            name="passpord"

                            ref={passwordInputRef} />

                    </div>
                    <div className={classes.control}>


                        <label htmlFor="newpassword"> Confirm New Password</label>
                        <input type='password'
                            required id="newpasspord"
                            name="newpasspord"

                            ref={newPassportInputRef} />

                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Submit</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default ChangePassword;