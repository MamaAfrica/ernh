import classes from './profileLinks.module.css'
import Link from 'next/link'
import CopyIcon from "../icons/copy";
import WithdrawIcon from "../icons/withdrawIcon";
import EarningIcon from "../icons/earning";
import ProfileIcon from "../icons/profile";
import BankIcon from "../icons/bank";
 
import ShareIcon from "../icons/shareIcon";
import DownlineIcon from "../icons/downline";

function ProfileLinks() {
    return (
        <div className={classes.links}>
            <div className={classes.easyDiv}>
                <h4>Easy Access</h4>
                </div>
            <div className={classes.icons}>
            
                <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button>
                            <Link href='/withdrawal'>  <WithdrawIcon /></Link>

                        </button>
                    </div>
                    <div className={classes.btnTwo}>
                        <button>Withdrawal</button>
                    </div>

                </div>
                <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button>
                            <Link href='/bank'><BankIcon /></Link>

                        </button>
                    </div>
                    <div className={classes.btnTwo}>
                        <button>Bank</button>
                    </div>
                </div>
                <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button>
                            <Link href="/profile"> <ProfileIcon /></Link>

                        </button>
                    </div>
                    <div className={classes.btnTwo}>
                        <button>Profile</button>
                    </div>
                </div>

                <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button>
                            <Link href='/earning'> <EarningIcon /></Link>

                        </button>
                    </div>
                    <div className={classes.btnTwo}>
                        <button>Earning</button>
                    </div>
                </div>
                <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button>
                            <Link href='/downline'> <DownlineIcon /></Link>

                        </button>
                    </div>
                    <div className={classes.btnTwo}>
                        <button>Downline</button>
                    </div>
                </div>
                <div className={classes.icon}>
                    <div className={classes.iconbtnOne}>
                        <button>
                            <Link href='/advert'><ShareIcon /> </Link>

                        </button>
                    </div>
                    <div className={classes.btnTwo}>
                        <button>Share</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileLinks