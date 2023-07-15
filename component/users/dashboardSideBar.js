import Link from 'next/link'
import BankIcon from '../icons/bank'
import BankTwo from '../icons/bankTwo'
import DashboardIcon from '../icons/dashboard'
import DollarIcon from '../icons/dollar'
import DownlineIcon from '../icons/downline'
import EarningTwoIcon from '../icons/earningTwo'
import ProfileTwoIcon from '../icons/profileTwo'
import ShareIcon from '../icons/shareIcon'
import classes from './dashboardSide.module.css'


function DashboardSide() {
    return (
        <div className={classes.section}>
            <div>
              <Link href="/dashboard"><DashboardIcon /></Link>  
            </div>
            <div>
               <Link href="/profile"><ProfileTwoIcon /></Link> 
            </div>
            <div>
                <DownlineIcon />
            </div>
            <div>
                <DollarIcon />
            </div>
            <div>
                <EarningTwoIcon />
            </div>

            <div>
              <Link href="/bank"> <BankTwo/></Link> 
            </div>
            <div>
                <ShareIcon />
            </div>


        </div>
    )
}

export default DashboardSide