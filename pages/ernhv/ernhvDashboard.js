const { default: VendorDashboard } = require("@/component/vendors/vendorDashboard");
import { useSession } from "next-auth/react";

function ErnhvVendorDashboard(){
    const{data:session,status} = useSession()
    if(status==='unauthenticated'){
        return <h1>Access Denied</h1>
    } else if(status === 'authenticated' && session.user.role !=='vendor'){
        return <h1>Not a Vendor</h1>
    }
    return(
        <div>
            <VendorDashboard/>
        </div>
    )
}

export default ErnhvVendorDashboard