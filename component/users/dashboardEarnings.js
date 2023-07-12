import { useSession } from "next-auth/react"
import classes from "./dashboardEarning.module.css"

function DashboardEarnings() {
    const { data: session } = useSession()
    return (
        <div className={classes.section}>
            <div className={classes.sectionOne}>
                <div className={classes.earningOne}>
                    <div className={classes.hiveGame}>
                        <p>HIVE GAME BALANCE</p>
                        <p>  {session.user.hiveGame} H</p>
                    </div>
                    <div className={classes.indirectSales}>
                        <p>INDIRECT SALES</p>
                        <p>N {session.user.indirectReferalBonus + session.user.secondIndirectRBonus}</p>
                    </div>
                </div>
                <div className={classes.earningTwo}>
                    <div className={classes.directSale}>
                        <p>DIRECT SALES</p>
                        <p> N {session.user.referalBonus}</p>
                    </div>
                    <div className={classes.hiveCash}>
                        <p>HIVE CASH</p>
                        <p>{session.user.welcomeBonus +
                            session.user.hivepostOne +
                            session.user.hivepostTwo +
                            session.user.dailyLogin
                        } H</p>
                    </div>
                </div>
            </div>
            <div className={classes.sectionTwo}>
                <div className={classes.total}>
                    <p>TOTAL WITHDRAWAL</p>
                    <p> N {session.user.totalWithdrawal}</p>
                </div>
            </div>

        </div>
    )
}
export default DashboardEarnings