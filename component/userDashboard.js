import DashboardBanner from "./users/dashboardBanner"
import DashboardEarnings from "./users/dashboardEarnings"
import DashboardMain from "./users/dashboardMain"

function UserDashboard() {
    return (
        <div>
            <DashboardBanner />
            <DashboardMain />
            <DashboardEarnings/>
        </div>
    )
}

export default UserDashboard