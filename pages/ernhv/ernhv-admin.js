import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Spinner from "@/component/icons/spinner";
 
import classes from './earnhv.module.css'
 
 
 


const AdminRegistration = () => {
  
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


    const [show, setShow] = useState(false) 
    const[emailErr, setEmailErr] = useState(' ')
    const[password, setPassErr] = useState(' ')
    const [waitMsg, setWaitMsg] = useState(' ')
    const [spinner, setSpinner] = useState(false)

    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const router = useRouter()


    //toggle of show and hide password
    function setFnc() {
        setShow(!show)
    }

    async function submitHandler(event) {
        event.preventDefault()
        const  enteredFirstname= firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //validation
        
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
            role: 'Admin'
             
         }
         console.log(data)
        const response = await fetch('https://www.earnhive.net/api/admin/admin-register', {
            method: 'POST',
            body: JSON.stringify( data ),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        let userData = await response.json()

        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
        }

        router.push('/ernhv/ernhv-admin-login')
    }
       
         
    
        
    return ( 
        
        <div className={classes.section}>
            <h2>Admin Registration</h2>
        <div className={classes.card}>
        <div className={classes.figure}>
        <img src="https://static.vecteezy.com/system/resources/previews/004/379/378/non_2x/technical-support-operator-flat-illustration-company-employee-technician-isolated-cartoon-character-on-white-background-call-center-it-department-worker-with-headset-computer-maintenance-vector.jpg" alt="cartoon on laptop"/>
          </div>
             <form onSubmit={submitHandler}className={classes.form}>
                <div className={classes.control}>
                {spinner}
                    <h3>{waitMsg}</h3>
                   <label htmlFor="firstname">Firstname</label>
                   <input type='text' 
                   required id="firstname" 
                   name = "firstname"
                   placeholder= "John"
                   ref={firstNameInputRef}/>
                  
                </div>
                <div className={classes.control}>
                
                   <label htmlFor="Lastname">Lastname</label>
                   <input type='text' 
                   required id="lastname" 
                   name = "lastname"
                   placeholder= "Doe"
                   ref={lastNameInputRef}/>
                  
                </div>
                <div className={classes.control}>
              
                   <label htmlFor="username">Username</label>
                   <input type='text' 
                   required id="username" 
                   name = "username"
                   placeholder= "jsmith@gmail.com"
                   ref={emailInputRef}/>
                  
                </div>
                <div>
                    {emailErr}
                </div>

                <div className={classes.control}>
                   <label htmlFor="password">Password</label>
                   
                   <input type={show?"text":"password"}
                    required id="password"
                    name="password" 
                    ref={passwordInputRef}/>

                    <div className={classes.span}>
                    < span onClick={setFnc} className={classes.actions}>{show?"Hide":"Show"}</span>
                    </div>
                   <div>
                    {password}
                   </div>
                </div>
                 
               
                <div className={classes.actions}>
                 <button type="submit">Register</button>
                 </div>

                <p>Forgot Password?</p><br/><br/>
                <p>You do not have an Account? <Link href='/ernhv/ernhv-admin-login' target='_blank'>Login</Link></p>
                
            </form>
            
        </div>
        </div>
    
     );
}
 
export default AdminRegistration;