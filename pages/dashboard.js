const { default: UserDashboard } = require("@/component/userDashboard");
import { useSession, getSession } from "next-auth/react"

function Dashboard(){
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
      }
      if (status === "unauthenticated") {
        return <p>Access Denied</p>
      }
    return ( 
        <div>
        
            <UserDashboard/>
        
        </div>
     );
}

export default Dashboard