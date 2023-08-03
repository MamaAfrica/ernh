import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';

import classes from './withdrawalForm.module.css'
import { useSession } from "next-auth/react";




const WithdrawalForm = () => {

    const { data: session } = useSession()
    const withdrawalInputRef = useRef()
    const amountInputRef = useRef()
    const router = useRouter()




    async function submitHandler(event) {
        event.preventDefault()
        const enteredWithdrawal = withdrawalInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const refUsername = session.user.usernmae

        const response = await fetch('http://localhost:3000/api/userImage/image-form', {
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
                            <option value="Afflite"> Afflite</option>
                            <option value="Task">Task</option>
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


                    <div className={classes.actions}>
                        <button type="submit">Submit a Request</button>
                    </div>



                </form>

            </div>
        </div>

    );
}

export default WithdrawalForm;