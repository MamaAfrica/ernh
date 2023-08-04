import classes from './sectionSix.module.css'
 import Link from 'next/link'

function SectionSix() {
    return (
        <div className={classes.sectionMain}>
           

            <div className={classes.section}>

                 
                <div className={classes.aside}>
                    <div className={classes.figure}>
                        <img src="https://res.cloudinary.com/ovaltech/image/upload/v1688393054/LOGINAPP/ae2tybpy4dgp3g20a6zs.gif" alt="hive" />
                    </div>
                    <div className={classes.figureContent}>
                        <h3>Hive Game </h3>
                        <p>With Hive game you can Win the sum of N500 on Each Correct winning and cashout to your Bank. This is as cool as would want it </p>

                        <div className={classes.btn}>
                        <button><Link href='/freelancing'>Learn More</Link></button>
                        </div>

                    </div>


                </div>
               
                <div className={classes.aside}>
                    <div className={classes.figure}>
                        <img src="https://res.cloudinary.com/ovaltech/image/upload/v1688392326/LOGINAPP/gvwqcgwyir6m4bbcvkqe.gif" alt="hive" />
                    </div>
                    <div className={classes.figureContent}>
                        <h3>Hive Freelancing </h3>
                        <p> As a registered Member of EarnHive, you can post your Jobs, advertise and market your items and Earn
                            when you’re been patronize by our users.  </p>

                        <div className={classes.btn}>
                        <button><Link href='/freelancing'>Learn More</Link></button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default SectionSix