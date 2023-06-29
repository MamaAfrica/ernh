import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
 import Spinner from "./icons/spinner";
import classes from './login-form.module.css'
 
import { signIn } from "next-auth/react";
 


const AdminRegistration = () => {
  
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


    const [show, setShow] = useState(false) 
    const[emailErr, setEmailErr] = useState(' ')
    const[password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, setSpinner] = useState(false)

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
        setSpinner(<Spinner/>)
        setWaitMsg('Hold on for few seconds...')
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
        const result  = await signIn("credentials",{
            username: enteredEmail,
            password: enteredPassword,
            redirect: true,
            callbackUrl:"/dashboard"
        })
        // console.log(result)
       
         
    }
        
    return ( 
        
        <div className={classes.section}>
            <h2>Admin Login</h2>
        <div className={classes.card}>
        <div className={classes.figure}>
        <img src="https://media.istockphoto.com/id/1257998329/vector/young-afro-american-man-sitting-on-the-chair-at-home-interior-and-working-with-laptop-vector.jpg?s=612x612&w=0&k=20&c=HHHYOCX39w0GCoyqRTfOorDBkLxPT2DhLzN8_B1bAv4=" alt="cartoon on laptop"/>
          </div>
             <form onSubmit={submitHandler}className={classes.form}>
                <div className={classes.control}>
                {spinner}
                    <h3>{waitMsg}</h3>
                   <label htmlFor="Username">Username</label>
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
                <p>You do not have an Account? <Link href='/signUp' target='_blank'>Register</Link></p>
                
            </form>
            
        </div>
        </div>
    
     );
}
 
export default AdminRegistration;