import classes from './vendoritems.module.css'
 

function userItem(props) {
  
console.log(props.firstname)

  //ensuring that only those that have asked for coupon are found
//   if (props. requestedWithdrawal > 0)




    return (<li className={classes.red}>

      


        <div className={classes.itemBody}>
          <h2>{props.requestedWithdrawal}</h2>
          <h5>{props.withdrawalRequestDate}</h5>
          <hr/>
          <h3>{props.firstname}</h3>
          <h5>{props.lastname}</h5>
          <h5>{props.bankName}</h5>

          <p>{props. phone}</p>
          <p>{props.prefferedUsername}</p>
          <p>{props.bank}</p>
           

          <p>{props.couponRequestDate}</p>



          
        </div>

      


    </li>
    )
}

export default userItem