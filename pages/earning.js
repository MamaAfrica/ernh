 
import classes from "./earning.module.css"
 import DashboardSide from "@/component/users/dashboardSideBar";
 import DashboardBanner from "@/component/users/dashboardBanner";
 import { useSession } from "next-auth/react";
 
function Earning(){
    const{data:session,status} = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    return(
        <div >
            <div className={classes.section}>
                <div className={classes.aside}>
                    <DashboardSide />
                </div>
                <div className={classes.sectionTwo}>
                    <DashboardBanner placed="Earnings" />

                </div>
            </div>
            <div className={classes.sectionOne}>
                <h1>Recent Earnings</h1>
                <div className={classes.earning}>
                    <div>
                        <p>{session.user.welcomeEarning}</p>
                    </div>
                    <div>
                        <p>{session.user.referralEarning}</p>
                    </div>
                    <div>
                        <p>{session.user.iReferralEarning}</p>
                    </div>
                    <div>
                        <p>{session.user.hivePostEarning}</p>
                    </div>
                    <div>
                        <p>{session.user.dLoginEarning}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Earning