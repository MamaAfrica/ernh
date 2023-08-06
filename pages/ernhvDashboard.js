const { default: VendorDashboard } = require("@/component/vendors/vendorDashboard");
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function ErnhvVendorDashboard(){
    const{data:session,status} = useSession()

    const router = useRouter()
    if(status==='unauthenticated'){
        router.push('/ernhv/ernhvLogin')
        return  
    } else if(status === 'authenticated' && session.user.role !=='vendor'){
        router.push('/ernhv/ernhvLogin')
        return 
    }
    return(
        <div>
            <VendorDashboard/>
        </div>
    )
}

export default ErnhvVendorDashboard