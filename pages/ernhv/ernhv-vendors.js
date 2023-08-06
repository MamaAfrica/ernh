 import classes from './ernhv-vendors.module.css'
import VendorList from "@/component/adminDashboard/vendorlist"
 import Vendor from '../../model/vendorSchema'
import connectDB from "@/utils/connectmongo"


function ErnhvVendors(props) {
    return (
        <div className={classes.header}>
            <VendorList vendors={props.vendors} />
        
        </div>
    )
}
export async function getStaticProps() {
    await connectDB()
    const vendors = await Vendor.find({})
    // console.log(vendors)

    return {
        props: {
            vendors: vendors.map((vendor) => ({
                firstname: vendor.firstname,

                lastname: vendor.lastname,
                username: vendor.username,
                prefferedUsername: vendor.prefferedUsername,
                
                phone: vendor.phone,
               
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

export default ErnhvVendors