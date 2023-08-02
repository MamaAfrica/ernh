import DashboardBanner from "@/component/users/dashboardBanner";
import DashboardSide from "@/component/users/dashboardSideBar";
import classes from './profile.module.css'
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import LocationIcon from "@/component/icons/location";
import ProfileImage from "@/component/users/profileimage";
import PhoneIcon from "@/component/icons/phone";
import ChangePassword from "@/component/users/changePassword";
import Getpin from "@/component/users/getPin";
function Profile() {
    const router = useRouter()
    const { data: session, status } = useSession()
     if(status==='loading'){
        return <p>Loading</p>
     }
    if (status === "unauthenticated") {
        router.push('/login')
        return
    }
    return (
        <div className={classes.section}>
            <div className={classes.aside}>
                <DashboardSide />
            </div>
            <div className={classes.sectionTwo}>
                <DashboardBanner placed="My Profile" />
                <div className={classes.sectionDetails}>
                    <h1>User Data</h1>
                    <div className={classes.date}>
                        <h3>Registerd Date</h3>
                        <p>{session.user.signUpDate}</p>
                    </div>
                    <div className={classes.sectionThree}>
                        <div className={classes.refUsername}>
                            <h3>Username</h3>
                            <p>{session.user.prefferedUsername}</p>
                        </div>
                        <div className={classes.username}>
                            <h3>Email</h3>
                            <p>{session.user.username}</p>
                        </div>
                        <div className={classes.referral}>
                            <h3>Referred By</h3>
                            <p>{session.user.referral}</p>

                        </div>
                    </div>
                    <div className={classes.sectionFour}>
                        <div className={classes.numReferred}>
                            <h2>Total Reffered</h2>
                            <div className={classes.btn}>
                            <button>{session.user.referredUsers.length - 1}</button>
                            </div>
                           
                            <ProfileImage/>
                            
                        </div>
                        <div className={classes.country}>
                       <p> <LocationIcon/>{session.user.country}</p>
                            <p><PhoneIcon/>{session.user.phone}</p>
                            <div>
                              <img src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="map"/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.security}>
                        <h1>Security Settings</h1>
                         
                        <ChangePassword/>

                    </div>

                    <div className={classes.withdrawal}>
                        <h1>Withdrawal </h1>

                        <Getpin/>
                    </div>





                </div>

            </div>



        </div>
    );
}

export default Profile