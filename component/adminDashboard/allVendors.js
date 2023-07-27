 
import { useRouter } from 'next/router';
import classes from './allVendors.module.css'



function AllVendors(props) {
    const router = useRouter()



    function showDetailsHandler() {
        router.push('/vendor/' + props.id);
    }



    return (<li className={classes.vendorItem}>

         

            <div className={classes.itemBody}>
                <div className={classes.figure}>
                    <img src={props.passport} alt={props.prefferedUsername} />
                </div>
                <h3>{props.firstname}</h3>
                <h5>{props.lastname}</h5>

                <p>{props.approved}</p>
                <p>{props.prefferedUsername}</p>

                <p>{props.registerdDate}</p>
                <button onClick={showDetailsHandler} className={classes.vendorBtn}>Vendor Details</button>


            </div>

       


    </li>
    )
}

export default AllVendors