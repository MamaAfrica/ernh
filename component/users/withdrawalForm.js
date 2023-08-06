import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';

import classes from './withdrawalForm.module.css'
import { useSession } from "next-auth/react";




const WithdrawalForm = () => {
    const[balanceErr,setBalanceErr] = useState(false)
    const { data: session } = useSession()
    const withdrawalInputRef = useRef()
    const amountInputRef = useRef()
    const router = useRouter()




    async function submitHandler(event) {
        event.preventDefault()
        if(session.user.activeWithdrawal===false){
            return
        }

        const enteredWithdrawal = withdrawalInputRef.current.value;
        const enteredAmount = Number(amountInputRef.current.value);
        const refUsername = session.user.refUsername
        const userBalance = session.user.referalBonus +
        session.user.indirectReferalBonus +
        session.user.secondIndirectRBonus

        // console.log( typeof(userBalance))
        // console.log( typeof(enteredAmount))
        if(enteredAmount>7000 ){
            setBalanceErr(<h3>Either you don't have Enough Balance or it is above 7000 </h3>)
            return
        }
        if(enteredAmount> userBalance ){
            setBalanceErr(<h3>Either you don't have Enough Balance or it is above 7000 </h3>)
            return
        }

        const response = await fetch('https://www.earnhive.net/api/withdrawal/userWithdrawal', {
            method: 'POST',
            body: JSON.stringify({ enteredWithdrawal, enteredAmount, refUsername }),
            headers: {
                'Content-type': 'application/json'
            },

        });
        let user = await response.json()

        if (!response.ok) {
            throw new Error(user.message || 'something went wrong')
        }

        router.reload()





    }

    return (

        <div className={classes.section}>

            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                    <div className={classes.control}>


                        <select
                            ref={withdrawalInputRef}
                            required
                            id="withdrawal"
                            name="withdrawal"
                        >
                            <option>Chose Witdrawal Type</option>
                            {session.user.activeWithdrawal=== true? <option value="Afflite" > Afflite</option>:  <option value="Afflite"  disabled> Afflite</option>}
                           
                            {session.user.activeWithdrawal=== true? <option value="Task" > Afflite</option>:  <option value="Task"  disabled> Task</option>}
                           
                        </select>

                    </div>


                    <div className={classes.control}>

                        <input type="number"
                            required id="amount"
                            name="amount"
                            ref={amountInputRef}
                            placeholder="Amount in Figure"
                        />



                    </div>

                        {balanceErr}
                    <div className={classes.actions}>
                        <button type="submit">Submit a Request</button>
                    </div>



                </form>

            </div>
        </div>

    );
}

export default WithdrawalForm;