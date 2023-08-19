
import classes from "./downline.module.css"
import DashboardSide from "@/component/users/dashboardSideBar";
import DashboardBanner from "@/component/users/dashboardBanner";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ProfileLinks from "@/component/users/profileLinks";

function Downline() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }
    let userDownline
    if (session.user.referredUsers.length === 1) {
        userDownline = <div className={classes.noDownline}><p>You Do not have any Downline yet, use your<Link href={session.user.refLink}> <span>Referral Link</span></Link>  to add new downlines</p></div>
    } else {
        userDownline = <div className={classes.downline}>
            {session.user.referredUsers.map((el, i) => {
                return (
                    <div key={i}>
                        <p>{el}</p>
                    </div>
                )
            })}

        </div>

    }
    return (
        <div>
            <div className={classes.section}>
                <div className={classes.aside}>
                    <DashboardSide />
                </div>
                <div className={classes.sectionTwo}>
                    <DashboardBanner placed="Downline" />

                </div>
            </div>
            <div className={classes.sectionOne}>
            <div className={classes.main}>
                        <ProfileLinks/>
                    </div>
                <h1>Direct Downlines</h1>
                {userDownline}
            </div>

        </div>
    )
}

export default Downline