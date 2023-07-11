import { useState } from "react";
import classes from './dashboardMain.module.css'
import { useSession } from "next-auth/react";
function DashboardMain() {
    const [isCopied, setIsCopied] = useState(false);
    const{data:session,status} = useSession()

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
                
                <input type="text" value={session.user.refLink} readOnly />
                 
                <button onClick={handleCopyClick}>
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>
        </div>
    )
}

export default DashboardMain