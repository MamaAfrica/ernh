import classes from './sectionThree.module.css'

function SectionThree() {
    return (
        <div className={classes.section}>
            <h2>Hive 7 Digital Courses</h2>
            <p>All Registered members are eligible to Learn and Earn with our free Digital Courses. </p>
            <div className={classes.hive}>
                <div className={classes.sectionTwo}>
                    <div className={classes.figure}>
                        <img src="https://images.pexels.com/photos/4386149/pexels-photo-4386149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hive" />
                    </div>
                    <div className={classes.list}>
                        <h4>Business adverts and many more… </h4>
                        <ul>
                            <li>Facebook marketing</li>
                            <li>WhatsApp Tv creating</li>
                            <li>Video Animation</li>
                            <li>Graphics Design  </li>
                            <li>Web Development </li>
                            <li>E-Kitchen </li>
                        </ul>
                        <div className={classes.btn}>
                            <button>Learn More</button>
                        </div>
                    </div>

                </div>

                <div className={classes.aside}>
                    <div className={classes.figureContent}>
                        <h3>EarnHive Earning Structure</h3>
                        <ul>
                            <li>Registration Fee: N4500  </li>
                            <li>Welcome Bonus: 2000H </li>
                            <li>Referral Bonus: N3500 </li>
                            <li>Indirect Reff Bonus:  N250    </li>
                            <li>2nd indirect Reff bonus: N100  </li>
                            <li>Hive post1: 200H    </li>
                            <li>Daily Login: 300H   </li>
                            <li>Minimum referral withdrawal 7000  </li>
                            <li> Minimum non referral withdrawal 22000.  </li>
                        </ul>

                    </div>
                    <div className={classes.figure}>
                        <img src="https://images.pexels.com/photos/10488436/pexels-photo-10488436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="hive" />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SectionThree