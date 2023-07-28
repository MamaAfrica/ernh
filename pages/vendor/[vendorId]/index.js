import VendorDetail from "@/component/adminDashboard/vendorDetaials";
import { Fragment } from "react"
import Head from "next/head"
import connectDB from "@/utils/connectmongo";
import Vendors from '../../../model/vendorSchema'



 

function PostDetails(props) {



    return (
        <Fragment>
            <Head>
                <title>{props.vendorData.prefferedUsername}</title>
                <meta name='description' content={props.vendorData.prefferedUsername} />

            </Head>
            <VendorDetail
                id={props.vendorData.id}
                firstname={props.vendorData.firstname}
                lastname={props.vendorData.lastname}
                username={props.vendorData.username}
                prefferedUsername={props.vendorData.prefferedUsername}
                phone={props.vendorData.phone}
                passport={props.vendorData.passport}
                bank = {props.vendorData.bank}
                link={props.vendorData.link}
                approved={props.vendorData.approved}
                couponsNumber={props.vendorData.couponsNumber}
                unaprovedCoupons={props.vendorData.unaprovedCoupons}
                registerdDate={props.vendorData.registerdDate}
                couponRequestDate={props.vendorData.couponRequestDate}
                lastLoginDate={props.vendorData.lastLoginDate}
                soldCoupons={props.vendorData.soldCoupons}
                UnsoldCoupons={props.vendorData.UnsoldCoupons}
                UpaidsoldCoupons={props.vendorData.UpaidsoldCoupons}
                usedCoupons = {props.vendorData.usedCoupons}
            />
           
        </Fragment>
    )
}

export async function getStaticPaths() {
    await connectDB()
    const vendors = await Vendors.find({}, { _id: 1 })



    return {
        fallback: 'blocking',
        paths: vendors.map((vendor) => ({
            params: { vendorId: vendor._id.toString() },
        })),
    }


}

export async function getStaticProps(context) {

    const vendorId = context.params.vendorId
    await connectDB()
    const selectedVendor = await Vendors.findOne({
        _id: vendorId,
    });
     



    return {
        props: {
            vendorData: {
                id: selectedVendor._id.toString(),
                firstname: selectedVendor.firstname,

                lastname: selectedVendor.lastname,
                username: selectedVendor.username,
                prefferedUsername: selectedVendor.prefferedUsername,
                
                phone: selectedVendor.phone,
                passport: selectedVendor.passport,
                bank:selectedVendor.bank,
                link:selectedVendor.link,
                approved: selectedVendor.approved.toString(),
                couponsNumber: selectedVendor.couponsNumber,
                unaprovedCoupons: selectedVendor.unaprovedCoupons,
                registerdDate: selectedVendor.registerdDate,
                couponRequestDate: selectedVendor.couponRequestDate,
                lastLoginDate: selectedVendor.lastLoginDate,
                soldCoupons: selectedVendor.soldCoupons,
                UnsoldCoupons: selectedVendor.UnsoldCoupons,
                UpaidsoldCoupons: selectedVendor.UpaidsoldCoupons,
                usedCoupons:selectedVendor.usedCoupons,
                 

            },
            
        },
        revalidate: 1,



    };

}

export default PostDetails