function WithdrawalActivation(){
    return(
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
                            <option>Activate Withdrawal</option>
                            <option>De-Activate Withdrawal</option>
                            
                           
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

                        {confirmErr}
                    <div className={classes.actions}>
                        <button type="submit">Submit a Request</button>
                    </div>



                </form>

            </div>
        </div>
    )
}

export default WithdrawalActivation