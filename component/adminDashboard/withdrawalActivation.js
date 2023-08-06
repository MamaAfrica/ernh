import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';

import classes from '../../component/users/withdrawalForm.module.css'


function WithdrawalActivation() {
    const [confirmMsg, setConfirmMsg] = useState(false)

    const activeInputRef = useRef()
    const confirmInputRef = useRef()
    const router = useRouter()

    if (confirmInputRef !=='YES') {
        setConfirmMsg(<h3> You are no longer going ahead with the action</h3>)
        return
    }else{
        setConfirmMsg(<h3>Deactivating..</h3>)
    }
    

    async function submitHandler() {
        const response = await fetch('api/deactivateWithdrawal/deactivateWithdrawal', {
            method: 'POST',
            body: JSON.stringify({ activeInputRef, confirmInputRef }),
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
                            ref={activeInputRef}
                            required
                            id="withdrawal"
                            name="withdrawal"
                        >
                            <option value='activate'>Activate Withdrawal</option>
                            <option value='deactivate'>De-Activate Withdrawal</option>


                        </select>

                    </div>


                    <div className={classes.control}>

                        <input type="text"
                            required id="confirm"
                            name="amount"
                            ref={confirmInputRef}
                            placeholder="Confirm by typing the word YES"
                        />



                    </div>

                    {confirmMsg}
                    <div className={classes.actions}>
                        <button type="submit">Submit a Request</button>
                    </div>



                </form>

            </div>
        </div>
    )
}

export default WithdrawalActivation