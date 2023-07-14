import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react'
import classes from './profileimage.module.css'





const ChangePassword = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const newPassportInputRef = useRef()

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enterednewPassword = newPassportInputRef.current.value;
       
        // const data = { 
        //     passport:enteredImage,
        //     refUsername: session.user.refUsername

        // }
           
        // console.log(data)
         
        const response = await fetch('http://localhost:3000/api/userImage/image-form', {
            method: 'POST', 
            body: JSON.stringify({ enteredEmail,enteredPassword,enterednewPassword }),
            headers: {
              'Content-type': 'application/json'
            },
  
          });
          let user = await response.json()
  
         console.log(user)







    }

    return (

        <div className={classes.section}>
         
            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                  
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