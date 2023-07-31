import AllVendorList from '@/component/adminDashboard/allVendorList'
import Vendor from '../../model/vendorSchema'
import connectDB from "@/utils/connectmongo"
import VendorsCodeList from '@/component/users/vendorsCodeList'


function ErnhvAllVendors(props) {
   return (
       <div>
           <AllVendorList vendors={props.vendors} />
            
           
       
       </div>
   )
}
export async function getStaticProps() {
   await connectDB()
   const vendors = await Vendor.find({})
 

   return {
       props: {
           vendors: vendors.map((vendor) => ({
               firstname: vendor.firstname,

               lastname: vendor.lastname,
               username: vendor.username,
               prefferedUsername: vendor.prefferedUsername,
               
               phone: vendor.phone,
               passport: vendor.passport,
               bank:vendor.bank,
               link:vendor.link,
               approved: vendor.approved,
               couponsNumber: vendor.couponsNumber,
               unaprovedCoupons: vendor.unaprovedCoupons,
               registerdDate: vendor.registerdDate,
               couponRequestDate: vendor.couponRequestDate,
               lastLoginDate: vendor.lastLoginDate,
               soldCoupons: vendor.soldCoupons,
               UnsoldCoupons: vendor.UnsoldCoupons,
               UpaidsoldCoupons: vendor.UpaidsoldCoupons,
               id: vendor._id.toString(),
           })),
           revalidate: 1,
       }
   }
}

export default ErnhvAllVendors