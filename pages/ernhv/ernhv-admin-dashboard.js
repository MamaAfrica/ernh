const { default: UserDashboard } = require("@/component/userDashboard");
import { useSession, getSession } from "next-auth/react"

function AdminDashboard(){
    const { data: session, status } = useSession()
    if (status === "loading") {
        return <p>Loading...</p>
      }
      if (status === "unauthenticated") {
        return <p>Admin Access Denied</p>
      }
    return ( 
        <div>
        
            <h3>Admin Dashboard</h3>
        
        </div>
     );
}

export default AdminDashboard