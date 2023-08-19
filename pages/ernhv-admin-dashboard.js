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
      if(status==='authenticated' && session.user.role !=='Admin'){
        return <h1>Not an Admin</h1>
      }
    return ( 
        <div>
        
            <h3>Admin Dashboard</h3>
        
        </div>
     );
}

export default AdminDashboard