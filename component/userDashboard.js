import DashboardBanner from "./users/dashboardBanner"
import DashboardEarnings from "./users/dashboardEarnings"
import DashboardMain from "./users/dashboardMain"
import DashboardSide from "./users/dashboardSideBar"
import classes from './userDashboard.module.css'

function UserDashboard() {
    return (
        <div className={classes.section}>
            <div>
                <DashboardSide />
            </div>
            <div>
                <DashboardBanner />
                <DashboardMain />
                <DashboardEarnings />
            </div>

        </div>
    )
}

export default UserDashboard