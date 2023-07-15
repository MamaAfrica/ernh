import DashboardBanner from "@/component/users/dashboardBanner";
import DashboardSide from "@/component/users/dashboardSideBar";
import classes from './bank.module.css'
import { useSession } from "next-auth/react";
import bankData from "./api/bankdata";

import { useRef } from "react";

function Bank() {
    const { data: session, status } = useSession()
    const bankInputRef = useRef()
    const accountNumberInputRef = useRef()
    const bankNameInputRef = useRef()
    const pinInputRef = useRef()
    
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
        let enterdpin = pinInputRef.current.value
        if(enterdpin===""){
         
                enterdpin = session.user.pin
            
        }
        const data = {
            enteredBank,
            enterdBankName,
            enteredAccountNumber,
            enterdpin
        }
        console.log(data)

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
                            <input type='Number'
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


                            <label htmlFor="bankName">Change Withdrawal Pin</label>
                            <p style={{marginBottom:"10px"}}>If you do not want to change your withdrawal PIN you can leave it the field empty</p>
                            <input type='Number'
                                id="pin"
                                name="pin"

                                ref={pinInputRef} />

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