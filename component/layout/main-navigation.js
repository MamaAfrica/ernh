import { useRouter } from "next/router";
import Link from "next/link";
import Cart from "./cart";
import Logo from "./logo";
import Hamburger from "./hamburger";
import classes from './main-navigation.module.css'


const MainNavigation = () => {


    return (
        <header className={classes.header}>
            <div className={classes.section}>
                <nav className={classes.nav} >
                    <div className={classes.alogo}>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>
                    <div className={classes.main}>
                        <main>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/about'>About</Link></li>


                                <li className={classes.menu}>
                                    <Link href='/about'>Pages</Link>
                                    <ul className={classes.dropdownMenu}>
                                        <li><Link href='/activation-code'>Get Coupon Code</Link></li>
                                        <li><Link href='/coupon-checker'>Check Code</Link></li>
                                        <li><Link href='/how-it-works'>How it works</Link></li>
                                        <li><Link href='/top-earners'>Top Earners</Link></li>
                                    </ul>
                                </li>




                                <li><Link href='/sponsored-task'>Sponsored Task</Link></li>
                                <li><Link href='/advert'>Hive Advert</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                                <li><Link href='/about'>Terms</Link></li>
                                <ul className={classes.dropdownMenu}>
                                        <li><Link href='/terms-and-conditions'>Terms and Conditions</Link></li>
                                        <li><Link href='/privacy'>Privacy Policy</Link></li>
                                         
                                    </ul>
                                <li><Link href='/freelancing'>Freelancing</Link></li>
                                <li className={classes.sign}><Link href='/signIn'>Sign In</Link></li>





                            </ul>
                        </main>
                    </div>


                </nav>
                <div className={classes.hr}></div>
            </div>
            <div className={classes.mobileHeader}>
                <div className={classes.mobileNav}>
                    <div className={classes.mobileLogo}>
                        <Link href='/'>
                            <Logo />
                        </Link>
                    </div>

                    <div className={classes.hamburger}>
                        <Hamburger />
                        <div className={classes.menu}>
                            <main>
                                <ul>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/about'>About</Link></li>
                                    <li><Link href='/about'>Pages</Link></li>
                                    <li><Link href='/about'>Sponsored Task</Link></li>
                                    <li><Link href='/about'>Hive Advert</Link></li>
                                    <li><Link href='/contact'>Contact</Link></li>
                                    <li><Link href='/about'>Terms</Link></li>
                                    <li><Link href='/about'>Sign In</Link></li>
                                    <li><Link href='/about'>Freelancing</Link></li>

                                </ul>
                            </main>

                        </div>

                    </div>


                </div>
                <div className={classes.hr}></div>
            </div>

        </header>
    );
}

export default MainNavigation;