
import Link from 'next/link'
import classes from './sectionTwo.module.css'

function SectionTwo() {
    return (
        <div className={classes.section}>
            <span className={classes.choose}>Why Choose</span>

            <span className={classes.logo}><img src="https://res.cloudinary.com/ovaltech/image/upload/v1688181006/LOGINAPP/msthqbflmwmujpbdbrhc.png" alt="logo" /></span>

            <span className={classes.earn}>Earn</span><span className={classes.hive}>Hive</span>

            <div className={classes.short}>
                <p>EarnHive: A strong and short
                    name that brings to mind cooperation, collaboration and earning money. The name aligns with
                    big ideas of Ambition, Goal, Community, Tribe, Connection. Excellent fit for business ideas like
                    venture capital funds, star
                    tup accelerators, and hedge funds, a Career Counseling business, a
                    Recruitment & Staffing Business, a Finance business and many more! Hive is a clever word that
                    delivers a sense of community and teamwork.</p>
            </div>
            <div className={classes.btn}>
                <button><Link href='/how-it-works'>Learn More</Link></button>
            </div>
        </div>
    )
}
export default SectionTwo