import connectDB from "@/utils/connectmongo";
import Vendor from '../../../model/vendorSchema'


async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB()
            const { coupon } = req.body
            const allVendors = await Vendor.find({})

            //checking if coupon is in database

            const allApprovedCouponsWithDates = allVendors.flatMap(user => user.approvedCoupons.flat());
            const allApprovedCoupons = allApprovedCouponsWithDates.map((el) => {
                return el.slice(0, 24).trim()
            })


            if (allApprovedCoupons.includes(coupon)) {
                console.log('coupoun is the database')
            } else {
                console.log('coupoun is NOT IN the database')
                return
            }



            //using the coupon code 
            //getting the first 5 characters in the coupon
            let couponInit = coupon.slice(0, 5).trim() // this is alreay in upperCase
            let secondInit = coupon.slice(10, 13)

            //finding the vendor
            const foundUser = allVendors.find((el) => {
                return (el.prefferedUsername.slice(0, 5).trim().toUpperCase() === couponInit && el.username.slice(1, 4).trim().toUpperCase() === secondInit)
            })
            //checking if coupon has been used already
            const user = foundUser._id
            if (foundUser.usedCoupons.includes(coupon)) {
                res.status(403).json({ message: 'Coupon has been used' })
                console.log('Coupon has been used')
                return
            }

            res.status(200).json({ message: 'Coupon has not been used' })

            console.log('Coupon has not been used')
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler


