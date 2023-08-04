const { default: UserDashboard } = require("@/component/userDashboard");
import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/router";

function Dashboard(){
    const { data: session, status } = useSession()
    const router = useRouter()
     
      if (status === "loading") {
        return <p>Loading...</p>
      }
      if (status === "unauthenticated") {
         router.push('/login')
         return
      }
      if(status==='authenticated' && session.user.role !=='User'){
        router.push('/login')
        return
      }
    return ( 
        <div>
        
            <UserDashboard/>
        
        </div>
     );
}

export default Dashboard