
import classes from "./earning.module.css"
import DashboardSide from "@/component/users/dashboardSideBar";
import DashboardBanner from "@/component/users/dashboardBanner";
import { useSession } from "next-auth/react";
import UserEarning from "@/component/users/usersEarning";

function Earning() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    return (

        <div className={classes.sectionED}>
            <div className={classes.aside}>
                <DashboardSide />
            </div>

            <div className={classes.sectionSet}>
                <div>
                    <DashboardBanner placed="Earnings" />
                </div>
                <div className={classes.userEarns}>
                    <UserEarning />
                </div>


            </div>
        </div>



    )
}

export default Earning