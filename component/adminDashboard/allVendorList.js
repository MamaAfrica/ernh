import classes from './vendorlist.module.css'
import AllVendors from './allVendors'

function AllVendorList(props){
return(
    
    <ul className={classes.list}>
        {props.vendors.map((vendor)=>(
            <AllVendors 
            key={vendor.id}
            id={vendor.id}
            firstname={vendor.firstname}
            lastname={vendor.lastname}
            approved= {vendor.approved}
            passport = {vendor.passport}
            email = {vendor.username}
            prefferedUsername = {vendor.prefferedUsername}
            couponsNumber = {vendor.couponsNumber}
            registerdDate={vendor.registerdDate}
            
            />
        ))}
    </ul>
)
}

export default AllVendorList