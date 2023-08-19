import classes from './contact.module.css'
import Link from 'next/link'
function Contact() {
    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h1>How Can We Help?</h1>
            </div>
            <div className={classes.email}>
                <h3><Link href="mailto:abiomsupply@gmail.com">earnhive@gmail.com</Link></h3>
            </div>
            <div className={classes.question}>
                <p>We're happy to answer questions. We will do our best to respond to you within 24 hours, sometimes a bit longer on weekends.</p>
            </div>
            <div className={classes.address}>
                <p>Address</p>
            </div>
            <div className={classes.add}>
                <p>Port Harcourt Nigeria</p>
            </div>
            <div className={classes.hr}></div>
        </div>
    )
}

export default Contact