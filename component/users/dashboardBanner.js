import LessThanIcon from '../icons/lassThan'
import NotificationIcon from '../icons/notification'
import { signIn, signOut, useSession } from 'next-auth/react'

import { useRouter } from "next/router";
import classes from './dashboardBanner.module.css'
function DashboardBanner(props) {
    const { data: session, status } = useSession()
    const router = useRouter()
    let profile
    function showProfile() {
        if (session.user.passport !== "none") {
            profile = <div className={classes.proImg}>
                <li onClick={handleDashboard}> <img src={session.user.passport} /></li>
            </div>
        } else  {
            profile = <div className={classes.userInit}>
                <li onClick={handleDashboard}> {`${session.user.firstname.charAt().toUpperCase()}${session.user.lastname.charAt().toUpperCase()}`}</li>
            </div>
        }  
    }
    showProfile()

    function handleDashboard() {

        router.push("/dashboard")
    }
    function handleBack() {
        router.back()
    }
    // let welcomeBonus = session.user.welcomeBonus
    // let hivepostOne = session.user.hivepostOne
    // let hivepostTwo = session.user.hivepostTwo
    // let dailyLogin = session.user.dailyLogin
    // let totalHivePoint = welcomeBonus+hivepostOne+hivepostTwo+dailyLogin
    // setTotalPoint(totalHivePoint)
    return (
        <div className={classes.banner}>
            <div className={classes.nav}>
                <div className={classes.less} onClick={handleBack}>
                    <LessThanIcon />
                </div>
                <div className={classes.dashboard}>
                    <h2>{props.placed}</h2>
                </div>
                <div className={classes.notification}>
                    <NotificationIcon />
                </div>
            </div>
            <div className={classes.profile}>
                <div>
                    {profile}
                </div>
                <div className={classes.welcomeUser}>
                    <div className={classes.welcome}>
                        <h2>Welcome</h2>
                    </div>
                    <div className={classes.username}>
                        {session?.user ? (<li onClick={handleDashboard}>
                            {`${session.user.firstname} ${session.user.lastname}`}

                        </li>) : " "}
                    </div>


                </div>
            </div>
            <div className={classes.earning}>
                <div className={classes.hiveCash}>
                    <p>Hive Cash</p>
                    <h1>{
                        session.user.dailyLogin +
                        session.user.hivepostOne +
                        session.user.hivepostTwo +
                        session.user.welcomeBonus 
                        
                    } H</h1>

                </div>
                <div className={classes.divTotal}>
                    <div className={classes.total}>
                        <div className={classes.totalBalance}>
                            <p>Total Balance</p>
                            <h1>N {session.user.referalBonus +
                                session.user.indirectReferalBonus +
                                session.user.secondIndirectRBonus

                            } </h1>
                        </div>
                        <div className={classes.bank}>
                            <p>Bank</p>
                            <div>
                                <p>ACE</p><span></span>
                            </div>

                        </div>
                    </div>


                </div>
                <div className={classes.hiveGame}>
                    <p>Hive Game</p>
                    <h1>{session.user.hiveGame
                    } H</h1>

                </div>
            </div>
        </div>
    )
}
export default DashboardBanner