import { useSession } from 'next-auth/react'
import classes from './userEarnings.module.css'


function UserEarning() {
    const {data:session, status} = useSession()
    return (
        <div className={classes.sectionEarn}>
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
                    <p>{session.user.sIReferralEarning}</p>
                </div>
                <div>
                    <p>{session.user.hivePostEarning}</p>
                </div>
                <div>
                    <p>{session.user.dLoginEarning}</p>
                </div>

            </div>

        </div>
    )
}

export default UserEarning