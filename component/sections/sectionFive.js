import classes from './sectionFive.module.css'
 

function SectionFive() {
    return (
        <div className={classes.sectionMain}>
            <h2>More Features For You</h2>

            <div className={classes.section}>

                <div className={classes.aside}>
                    <div className={classes.figure}>
                        <img src="https://res.cloudinary.com/ovaltech/image/upload/v1688392780/LOGINAPP/jxlgnknutsgnfc8qipef.gif" alt="hive" />
                    </div>
                    <div className={classes.figureContent}>
                        <h3>Hive Recharge </h3>
                        <p>  With Hive Recharge You can Sell Data and Airtime or purchase data/airtime with just your activities Balance and earn profit weekly or you may either Sub and Recharge yourself. </p>

                        <div className={classes.btn}>
                            <button>Learn More</button>
                        </div>

                    </div>


                </div>
                
                <div className={classes.aside}>
                    <div className={classes.figure}>
                        <img src="https://res.cloudinary.com/ovaltech/image/upload/v1688391248/LOGINAPP/al5m18nq3ndjqk7kzxog.gif" alt="hive" />
                    </div>
                    <div className={classes.figureContent}>
                        <h3>Hive P2P </h3>
                        <p>   With Hive p2p you can use your activities Balance to Register the next new user and Keep the money
                            to yourself which means you can earn Over 10-25k weekly through the P2p section </p>

                        <div className={classes.btn}>
                            <button>Learn More</button>
                        </div>

                    </div>


                </div>
                 
            </div>
        </div>
    )
}
export default SectionFive