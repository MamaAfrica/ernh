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
    
    // rearrange()
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    const Allvendors = await Vendor.find({})
    let vendors
    
    function rearrangeArray() {
         vendors = shuffleArray([...Allvendors]);
        return vendors;
    }
    // Example usage:
    rearrangeArray(); // Output will be a shuffled version of the 'vendors' array



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