import classes from './vendoritems.module.css'
 

function userItem(props) {
  
    async function setApprove(e) {
        e.preventDefault()
        let email = props.email
        let prefferedUsername = props.prefferedUsername
        let couponsNumber = props.couponsNumber
        const data = {
          email: props.email,
          prefferedUsername: props.prefferedUsername,
          couponsNumber: props.couponsNumber
    
        }
        console.log(data)
        const response = await fetch('api/vendor/vendor-approve', {
          body: JSON.stringify({ email, prefferedUsername, couponsNumber }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
    
        })
        let newPostData = await response.json()
    
        if (!response.ok) {
          throw new Error(newPostData.message || 'something went wrong')
        }
    
        router.reload()
    
    
      }

  //ensuring that only those that have asked for coupon are found
  if (props. requestedWithdrawal > 0)




    return (<li className={classes.red}>

      


        <div className={classes.itemBody}>
        <form onSubmit={setApprove}>
            <input type='text'
              value={props.requestedWithdrawal}
              readOnly
            />
            {approveBtn}
          </form>
          
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