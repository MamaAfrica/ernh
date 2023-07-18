import DashboardBanner from "@/component/users/dashboardBanner";
import DashboardSide from "@/component/users/dashboardSideBar";
import classes from './bank.module.css'
import { useSession } from "next-auth/react";
import bankData from "./api/bankdata";
import { useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";

function Bank() {
    const { data: session, status } = useSession()
    const[waitMsg, setWaitMsg] = useState(" ")
    const[cpinMsg, setCpinMsg] = useState(" ")
    const[goodMsg, setGoodMsg] = useState(" ")
    const bankInputRef = useRef()
    const accountNumberInputRef = useRef()
    const bankNameInputRef = useRef()
    const confirmPinInputRef = useRef()
    const pinInputRef = useRef()
    const router = useRouter()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }






    async function submitHandler(e) {
        e.preventDefault()

        const enteredBank = bankInputRef.current.value
        const enteredAccountNumber = accountNumberInputRef.current.value
        const enterdBankName = bankNameInputRef.current.value
        const enterdCpin = confirmPinInputRef.current.value
        let enterdpin = pinInputRef.current.value
        if (enterdpin === "") {

            enterdpin = session.user.pin

        }

        if(enterdCpin===enterdpin){
          
            setGoodMsg('PIN Matched ):') 
            setCpinMsg(' ')
        }else{
            setCpinMsg('PIN DO NOT Matched :(')
            setGoodMsg(' ') 
            return
        }
        const data = {
            bank: enteredBank,
            bankName: enterdBankName,
            accountNumber: enteredAccountNumber,
            pin: Number(enterdpin),
            username: session.user.username

        }
        console.log(data)
        setWaitMsg('Please Hold On')
        const response = await fetch('api/bank/bankForm', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        console.log(data)
        let userData = await response.json()

        if (!response.ok) {
            throw new Error(userData.message || 'something went wrong')
            
        } 

        router.reload()

    }



    return (
        <div>
            <div className={classes.section}>
                <div className={classes.aside}>
                    <DashboardSide />
                </div>
                <div className={classes.sectionTwo}>
                    <DashboardBanner placed="Bank Setup" />

                </div>
            </div>
            <div className={classes.sectionOne}>
                <h1>Update Bank Details</h1>
                <div className={classes.card}>

                    <form onSubmit={submitHandler} className={classes.form}>
                        <h3>{waitMsg}</h3>
                        <div className={classes.control}>
                            <label htmlFor="bank">Preffered Bank</label>
                            <select
                                id="bank"
                                name="bank"
                                required
                                ref={bankInputRef}>
                                <option>--Select Bank---</option>
                                {bankData.map((el, i) => {
                                    return (
                                        <option key={i}>{el}</option>
                                    )
                                })}

                            </select>

                        </div>
                        <div className={classes.control}>


                            <label htmlFor="accountNumber">Account Number</label>
                            <input type='text'
                                required id="accountNumber"
                                name="accountNumber"

                                ref={accountNumberInputRef} />

                        </div>
                        <div className={classes.control}>


                            <label htmlFor="bankName"> Account Name</label>
                            <input type='text'
                                required id="bankName"
                                name="bankName"

                                ref={bankNameInputRef} />

                        </div>
                        <div className={classes.control}>


                            <label htmlFor="pin">Change your 4-Digit Withdrawal Pin</label>
                            <p style={{ marginBottom: "10px" }}>If you do not want to change your withdrawal PIN you can leave it the field empty</p>
                            <input type='password'
                                id="pin"
                                name="pin"
                                minLength="4"
                                maxLength="4"
                                ref={pinInputRef} />

                        </div>
                        <div className={classes.control}>
                               <h3>{cpinMsg}</h3> 
                               <h2>{goodMsg}</h2>

                            <label htmlFor="cpin">Confirm your 4-Digit Withdrawal Pin</label>
                           
                            <input type='password'
                                id="cpin"
                                name="cpin"
                                minLength="4"
                                maxLength="4"
                                ref={confirmPinInputRef} />

                        </div>
                        <div className={classes.actions}>
                            <button type="submit">Update Now</button>
                        </div>


                    </form>

                </div>
            </div>

        </div>

    )
}
export default Bank