import WithdrawalActivation from "@/component/adminDashboard/withdrawalActivation"
import classes from './coupon.module.css'

function ErnhvWithdrawal(){
    return(
        <div className={classes.withdrawal}>
            <h2>Activate and Deactivate Withdrawal</h2>
            <WithdrawalActivation/>
        </div>
    )
}

export default ErnhvWithdrawal