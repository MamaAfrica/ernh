import DashboardBanner from "@/component/users/dashboardBanner";
import DashboardSide from "@/component/users/dashboardSideBar";
import classes from './profile.module.css'
import { useSession } from "next-auth/react";
function Profile() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    return (
        <div className={classes.section}>
            <div className={classes.aside}>
                <DashboardSide />
            </div>
            <div className={classes.sectionTwo}>
                <DashboardBanner />
                 
            </div>



        </div>
    );
}

export default Profile