import classes from './vendorlist.module.css'
import VendorItem from './vendoritems'

function VendorList(props){
return(
    <ul className={classes.list}>
        {props.vendors.map((vendor)=>(
            <VendorItem 
            key={vendor.id}
            id={vendor.id}
            firstname={vendor.firstname}
            lastname={vendor.lastname}
            approved= {vendor.approved}
            passport = {vendor.passport}
            email = {vendor.username}
            prefferedUsername = {vendor.prefferedUsername}
            couponsNumber = {vendor.couponsNumber}
            couponRequestDate={vendor.couponRequestDate}
            
            />
        ))}
    </ul>
)
}

export default VendorList