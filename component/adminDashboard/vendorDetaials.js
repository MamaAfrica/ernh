import classes from './vendorDetails.module.css'

function VendorDetail(props) {
    return (
        <div className={classes.section}>
            <h2>Vendor's Details</h2>
            <div className={classes.itemBody}>
                <div className={classes.figure}>
                    <img src={props.passport} alt={props.prefferedUsername} />
                </div>
                <h1>{props.firstname}</h1>
                <h5>{props.lastname}</h5>

               
                <p>{props.prefferedUsername}</p>
                 <p>{props.link}</p>
                 <hr/>
                 <p><span>Upapproved Coupons: </span>{props.couponsNumber}</p>
                
                 <p><span>coupon Request Date: </span>{props.couponRequestDate}</p>
                 <p><span>Registered Date: </span>{props.registerdDate}</p>
                 <p><span>Last Login Date: </span>{props.lastLoginDate}</p>
                 <p><span>Total Coupon Sold: </span>{props.usedCoupons.length-1}</p>

               

            </div>
        </div>
    )
}

export default VendorDetail