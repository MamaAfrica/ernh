
import classes from "./withdrawal.module.css"
import DashboardSide from "@/component/users/dashboardSideBar";
import DashboardBanner from "@/component/users/dashboardBanner";
import { useSession } from "next-auth/react";

function Withdrawal() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    return (
        <div className={classes.withdrawal}>
            <div className={classes.section}>
                <div className={classes.aside}>
                    <DashboardSide />
                </div>
                <div className={classes.sectionTwo}>
                    <DashboardBanner placed="Withdrawal" />

                </div>
            </div>
            <div className={classes.payment}>
                <h1>Payment</h1>
                <div className={classes.sectionOne}>
                    <div className={classes.card}>
                        <div className={classes.logo}>
                            <img src="../logo.png" alt="logo"/>
                            </div>
                        <div className={classes.cardDetails}>
                            <h4>{session.user.bankName}</h4>
                             
                        </div>

                    </div>
                    <div className={classes.further}>
                    <h4>{session.user.bank}</h4>
                    <h4>{session.user.accountNumber}</h4>
                    </div>
                    <div className={classes.paymentForm}>

                    </div>
                </div>
                <div className={classes.cashOut}>
                        <Withdrawal/>
                </div>

            </div>

        </div>
    )
}

export default Withdrawal