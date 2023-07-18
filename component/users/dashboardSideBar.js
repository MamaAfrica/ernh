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
             <button> <Link href="/dashboard"><DashboardIcon /></Link>  </button>
            </div>
            <div>
             <button><Link href="/profile"><ProfileTwoIcon /></Link> </button>  
            </div>
            <div>
             <button><Link href='/downline'><DownlineIcon /></Link></button>   
            </div>
            <div>
               <button> <Link href='/withdrawal'><DollarIcon /></Link></button> 
            </div>
            <div>
              <button><Link href='/earning'><EarningTwoIcon /></Link></button>  
            </div>

            <div>
             <button><Link href="/bank"> <BankTwo/></Link> </button> 
            </div>
            <div>
              <button><Link href='/share'><ShareIcon /></Link></button>  
            </div>


        </div>
    )
}

export default DashboardSide