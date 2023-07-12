import { useState } from "react";
import classes from './dashboardMain.module.css'
import { useSession } from "next-auth/react";
import CopyIcon from "../icons/copy";
import WithdrawIcon from "../icons/withdrawIcon";
import EarningIcon from "../icons/earning";
import ProfileIcon from "../icons/profile";
import BankIcon from "../icons/bank";
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
                <h4>Easy Access</h4>
                <div className={classes.icons}>
                    <div className={classes.icon}>
                        <button>
                            <WithdrawIcon />

                        </button>
                        <h4>Withdrawal</h4>
                    </div>
                    <div className={classes.icon}>
                        <button>
                            <BankIcon />

                        </button>
                        <h4>Bank</h4>
                    </div>
                    <div className={classes.icon}>
                        <button>
                            <ProfileIcon />

                        </button>
                        <h4>Profile</h4>
                    </div>
                    <div className={classes.icon}>
                        <button>
                            <EarningIcon />

                        </button>
                        <h4>Earning</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardMain