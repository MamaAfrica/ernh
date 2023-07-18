 
import classes from "./earning.module.css"
import DashboardSide from "@/component/users/dashboardSideBar";
import DashboardBanner from "@/component/users/dashboardBanner";
import { useSession } from "next-auth/react";

function Downline(){
   const{data:session,status} = useSession()
   if (status === "loading") {
       return <p>Loading...</p>
   }
   if (status === "unauthenticated") {
       return <p>Access Denied</p>
   }
   return(
       <div>
           <div className={classes.section}>
               <div className={classes.aside}>
                   <DashboardSide />
               </div>
               <div className={classes.sectionTwo}>
                   <DashboardBanner placed="Downline" />

               </div>
           </div>

       </div>
   )
}

export default Downline