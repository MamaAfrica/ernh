import { signIn, signOut, useSession } from 'next-auth/react'
import classes from './dashboardBE.module.css'
function DashboardBE(props) {
    const { data: session, status } = useSession()
    return (
        <div className={classes.banner}>

            <div className={classes.earning}>
                <div className={classes.stackedDiv}>
                    <div className={classes.hiveCash}>
                        <p>Hive Cash</p>
                        <h1>{
                            session.user.dailyLogin +
                            session.user.hivepostOne +
                            session.user.hivepostTwo +
                            session.user.welcomeBonus

                        } H</h1>

                    </div>
                </div>
                <div className={classes.stackedDiv}>
                <div className={classes.divTotal} >
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


                </div>
                <div className={classes.stackedDiv}>
                <div className={classes.hiveGame}>
                    <p>Hive Game</p>
                    <h1>{session.user.hiveGame
                    } H</h1>

                </div>
            </div>
            </div>
        </div>
    )
}
export default DashboardBE