import DashboardBanner from "./users/dashboardBanner"
import DashboardEarnings from "./users/dashboardEarnings"
import DashboardMain from "./users/dashboardMain"
import DashboardSide from "./users/dashboardSideBar"
import classes from './userDashboard.module.css'
// import Hamburger from "./layout/hamburger"

function UserDashboard() {
    return (
        <div className={classes.section}>
            <div className={classes.DashboardSide}>

                <DashboardSide />
            </div>

            <div className={classes.sectionOne}>
                <DashboardBanner placed="Dashboard" />
                <DashboardMain />
                <DashboardEarnings />
            </div>

        </div>
    )
}

export default UserDashboard