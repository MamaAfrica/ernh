import { useState } from "react";
import classes from './dashboardMain.module.css'
import { useSession } from "next-auth/react";
import CopyIcon from "../icons/copy";
import WithdrawIcon from "../icons/withdrawIcon";
import EarningIcon from "../icons/earning";
import ProfileIcon from "../icons/profile";
import BankIcon from "../icons/bank";
import Link from "next/link";
import ShareIcon from "../icons/shareIcon";
import DownlineIcon from "../icons/downline";
function DashboardMain() {
    const [isCopied, setIsCopied] = useState(false);
    const { data: session, status } = useSession()

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(session.user.refLink)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }




    return (
        <div className={classes.section}>
            <div className={classes.sectionOne}>
                <h4>Copy Referral Link</h4>
                <input type="text" value={session.user.refLink} readOnly />

                <button onClick={handleCopyClick}>

                    <span><CopyIcon /></span>
                    <span>{isCopied ? 'Copied!' : ''}</span>
                </button>
            </div>
            <div className={classes.sectionTwo}>
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
                                <Link href='/advert'><ShareIcon/> </Link>

                            </button>
                        </div>
                        <div className={classes.btnTwo}>
                            <button>Share</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default DashboardMain