import classes from './sectionOne.module.css'

function SectionOne() {
    return (
        <div className={classes.section}>
            <div className={classes.sectionAll}>
                <h2>How to Earn From EarnHive</h2>
                <p>In Earlink,a commission is paid to the upline if he registers a downline using his/her referral here are several was at which you can earn…</p>

            </div>
            <div className={classes.sectionTwo}>
                <div className={classes.sectionEarn}>
                <div className={classes.figureMobile}>
                    <img src='https://images.pexels.com/photos/6693657/pexels-photo-6693657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='earning' />
                </div>
                    <h3>Earning Through Referrals</h3>
                    <p>Here, you get paid at every single person you refer. Thus,
                        you have to keep referring to earn more commission from earnhive.
                        Referral is thus one of the easiest was to make million on Earnhive. Take this analysis below
                        Each referral you’ve got is 3,500
                        Imagine 20referrals in 3days. i.e 3,500x20=70,000
                        Not imaginary. As easy as possible. Earnhive making things easier.</p>
                    <div className={classes.btn}>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={classes.figure}>
                    <img src='https://images.pexels.com/photos/6693657/pexels-photo-6693657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='earning' />
                </div>
            </div>
            <div className={classes.sectionTwo}>
                <div className={classes.figureMobileTwo}>
                <img src='https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='earning' />
                </div>
                <div className={classes.sectionEarn}>
                    <h3>Earning Through Non Referrals</h3>
                    <p>There are thus ways for the Non referrals. This means, those
                        who can’t cope with referring. They’re as follows
                        Login in daily, you get a commission
                        Earnhive daily post, you get a commission
                        Earnhive lucky spin and win
                        Earnhive lucky quiz competition
                        Access to recharge cards/data purchase </p>
                    <div className={classes.btn}>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className={classes.figure}>
                    <img src='https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='earning' />
                </div>
            </div>
        </div>
    )
}

export default SectionOne