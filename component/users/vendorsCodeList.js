import classes from '../adminDashboard/vendorlist.module.css'
 import VendorsCodeItem from './vendorsCodeItem'

function VendorsCodeList(props){
return(
    
    <ul className={classes.list}>
        {props.vendors.map((vendor)=>(
            <VendorsCodeItem 
            key={vendor.id}
            id={vendor.id}
            firstname={vendor.firstname}
            lastname={vendor.lastname}
            approved= {vendor.approved}
            passport = {vendor.passport}
            bank = {vendor.bank}
            link = {vendor.link}
            email = {vendor.username}
            prefferedUsername = {vendor.prefferedUsername}
            couponsNumber = {vendor.couponsNumber}
            registerdDate={vendor.registerdDate}
            
            />
        ))}
    </ul>
)
}

export default VendorsCodeList