import classes from './vendoritems.module.css'


function userItem(props) {
//getting user account balance
  let total = props.referalBonus +
  props.indirectReferalBonus +
  props.secondIndirectRBonus
   let userBal = total - props.totalWithdrawal 
let username = props.username
  async function setApprove(e) {
    e.preventDefault()
    let totalWithdrawal = props.totalWithdrawal
     

      console.log(data)
    const response = await fetch('api/wd/wd-approve', {
      body: JSON.stringify({ totalWithdrawal,username }),
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
  if (props.requestedWithdrawal > 0)




    return (<li className={classes.red}>




      <div className={classes.itemBody}>
        <form onSubmit={setApprove}>
          <input type='text'
            value={props.requestedWithdrawal}
            readOnly
          />
          <button type='submit'>Submit</button>
        </form>

        <h5>{props.withdrawalRequestDate}</h5>
        <hr />
        <h3>{props.firstname}</h3>
        <h5>{props.lastname}</h5>
        <h5>{props.bankName}</h5>

        <p>{props.phone}</p>
        <p>{props.prefferedUsername}</p>
        <p>{props.bank}</p>


        <p>{props.couponRequestDate}</p>
        <hr/>
        <h1>{userBal}</h1>




      </div>




    </li>
    )
}

export default userItem