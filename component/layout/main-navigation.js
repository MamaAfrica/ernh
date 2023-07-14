import DropDown from "../icons/dropdown";
import Link from "next/link";

import { useRouter } from "next/router";
import Logo from "./logo";
import Hamburger from "./hamburger";
import classes from './main-navigation.module.css'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from "react";


const MainNavigation = () => {
    const { data: session, status } = useSession()
    // const[profile, setProfile] = useState(" ")
    const router = useRouter()
    let profile
    function showProfile() {
        if (session.user.passport !== "none") {
            profile = <div className={classes.proImg}>
                <li onClick={handleDashboard}> <img src={session.user.passport} /></li>
            </div>
        } else if (session.user) {
            profile = <div className={classes.userInit}>
                <li onClick={handleDashboard}> {`${session.user.firstname.charAt().toUpperCase()}${session.user.lastname.charAt().toUpperCase()}`}</li>
            </div>
        } else {
            profile = " "
        }
    }
    if (status === "authenticated") {

        showProfile()
    } else {
        console.log('not true')
    }

    function signIn() {
        router.push('/login')
    }



    async function logOut() {

        if (status === "authenticated") {

            await signOut({
                redirect: false
            })

            router.push('/login')
        } else {
            console.log('not true')
        }
    }
    function handleDashboard() {
        router.push("/dashboard")
    }
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
                                    Pages
                                    <ul className={classes.dropdownMenu}>
                                        <div>
                                            <li><Link href='/activation-code'>Get Coupon Code</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/coupon-checker'>Check Code</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/how-it-works'>How it works</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/top-earners'>Top Earners</Link></li>
                                        </div>

                                    </ul>
                                </li>




                                <li style={{ marginTop: "-4px", marginLeft: "5px" }}><DropDown /></li>
                                <li><Link href='/sponsored-task'>Sponsored Task</Link></li>
                                <li><Link href='/advert'>Hive Advert</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                                <li className={classes.termsMenu}>
                                    Terms
                                    <ul className={classes.dropdownM}>
                                        <div>
                                            <li><Link href='/tandc'>Terms and Conditions</Link></li>
                                        </div>
                                        <div>
                                            <li><Link href='/privacy'>Privacy Policy</Link></li>
                                        </div>


                                    </ul>
                                </li>
                                <li style={{ marginTop: "-4px", marginLeft: "5px" }}><DropDown /></li>
                                <li><Link href='/freelancing'>Freelancing</Link></li>
                                <div className={classes.sign}>
                                    {session?.user ? (<li onClick={logOut}>Logout</li>) : (<li onClick={() => signIn()} >Login</li>)}
                                </div>
                                <div >
                                    {profile}

                                </div>
                                {/* <div className={classes.userInit}>
                                    {session?.user ? (<li onClick={handleDashboard}>
                                        {`${session.user.firstname.charAt().toUpperCase()}${session.user.lastname.charAt().toUpperCase()}`}

                                    </li>) : " "}
                                </div> */}






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

export default MainNavigation