import classes from './usersItem.module.css'



function UsersItem(props) {
    let passport
    //using users initials when they do not have a passport yet
    if (props.passport === 'none') {
        passport = <div className={classes.userInit}>
            <p> {`${props.firstname.charAt().toUpperCase()}${props.lastname.charAt().toUpperCase()}`}</p>
        </div>

    } else {
        passport = <div className={classes.figure}>
            <img src={props.passport} alt={props.prefferedUsername} />
        </div>
    }
    //getting the total for users
    let totalBalance = props.referalBonus + props.indirectReferalBonus + props.secondIndirectRBonus
    if (totalBalance < 7000) {
        return
    }


    return (<li className={classes.vendorItem}>

        <div className={classes.itemBody}>
            <div className={classes.details}>
                {passport}
                <p className={classes.username}>{props.prefferedUsername}</p>
                <p className={classes.total}>N{totalBalance}</p>
            </div>
            <div className={classes.badge}>
                <img src='https://cliply.co/wp-content/uploads/2021/02/392102940_MEDAL_3D_400px.gif'/>
            </div>


        </div>




    </li>
    )
}

export default UsersItem