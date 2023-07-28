import classes from './activation-code.module.css'
import Vendor from '../model/vendorSchema'
import connectDB from '@/utils/connectmongo'

import VendorsCodeList from '@/component/users/vendorsCodeList'


function ActivationCode(props) {
    return (
        <div className={classes.header}>
            <h2>Message Any Vendor To Get Your Code</h2>

            <VendorsCodeList vendors={props.vendors} />


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
                bank: vendor.bank,
                link: vendor.link,
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

export default ActivationCode