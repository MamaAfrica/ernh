import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
 
 import classes from '../../pages/ernhv/earnhv.module.css'
 
import { signIn } from "next-auth/react";
 


const VendorLoginForm = () => {
  
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


    const [show, setShow] = useState(false) 
    const[emailErr, setEmailErr] = useState(' ')
    const[password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
   

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }

    async function submitHandler(event) {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //validation
        setWaitMsg('Hold on for few seconds...')
        if (enteredEmail.length < 10) {
            setEmailErr('Email Lenght must be greater than ten')
            return;
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
        } else {
            setPassErr('Good Password');
        }
          //picking the date of registration
        // Date object
        const date = new Date();

        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        // we will display the date as DD-MM-YYYY 

        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        const result  = await signIn("credentials",{
            username: enteredEmail,
            password: enteredPassword,
            role: 'Vendor',
            newLogin: currentDate,
            redirect: true,
            callbackUrl:"/ernhvDashboard"
        })
        // console.log(result)
       
         
    }
        
    return ( 
        
        <div className={classes.section}>
            <h2>Vendors Login</h2>
        <div className={classes.card}>
        <div className={classes.figure}>
        <img src="../../vendor.png"/>
          </div>
             <form onSubmit={submitHandler}className={classes.form}>
                <div className={classes.control}>
            
                    <h3>{waitMsg}</h3>
                   <label htmlFor="Username">Email</label>
                   <input type='text' 
                   required id="Username" 
                   name = "Username"
                   placeholder= "jsmith@gmail.com"
                   ref={emailInputRef}/>
                  
                </div>
                <div>
                    {emailErr}
                </div>

                <div className={classes.control}>
                   <label htmlFor="Password">Password</label>
                   
                   <input type={show?"text":"password"}
                    required id="password"
                    name="Password" 
                    ref={passwordInputRef}/>

                    <div className={classes.span}>
                    < span onClick={setFnc} className={classes.actions}>{show?"Hide":"Show"}</span>
                    </div>
                   <div>
                    {password}
                   </div>
                </div>
                 
               
                <div className={classes.actions}>
                 <button type="submit">Login</button>
                 </div>

                <p>Forgot Password?</p><br/><br/>
                 
                
            </form>
            
        </div>
        </div>
    
     );
}
 
export default VendorLoginForm;