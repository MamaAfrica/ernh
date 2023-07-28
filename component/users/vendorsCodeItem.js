import BankIcon from '../icons/bank'
import classes from '../adminDashboard/allVendors.module.css'
import Link from 'next/link'


function VendorsCodeItem(props) {

    return (
        <div className={classes.section}>


            <li className={classes.vendorItem}>


                <div className={classes.itemBody}>
                    <div className={classes.figure}>
                        <img src={props.passport} alt={props.prefferedUsername} />
                    </div>
                    <h3>{props.firstname}</h3>
                    <h5>{props.lastname}</h5>
                    <p className={classes.pName}>{props.prefferedUsername}</p>
                    <div className={classes.bankDetails}>
                        <span><BankIcon /></span>
                        <p className={classes.bank}>{props.bank}</p>
                    </div>

                    <div className={classes.whatsapp}>
                      <Link href={props.link}><img src='https://instantnaire.com/sasco/assets/images/whatsapp.gif' /></Link>  
                    </div>



                </div>




            </li>
        </div>
    )
}

export default VendorsCodeItem