import classes from './vendoritems.module.css'
import { useRouter } from 'next/router';

import { useState } from 'react';


function VendorItem(props) {
  const router = useRouter()



  function showDetailsHandler() {
    router.push('/vendor/' + props.id);
  }
  //setiing disapprove button
  function setDissaprove() {

    alert('done')
  }

  let approvedClass;
  let disapproveBtn;
  let approveBtn;
  if (props.couponsNumber!==0) {
    approvedClass = classes.red
    disapproveBtn = <button onClick={setDissaprove} className={classes.disapproveBtn}>Disapprove</button>
    approveBtn = <button type='submit' className={classes.formBtn}>Approve</button>
  } else {
    approvedClass = classes.green
    disapproveBtn = ''
    approveBtn = <button type='submit'>Approve</button>
  }




  async function setApprove(e) {
    e.preventDefault()

    const data = {
      email: props.email,
      prefferedUsername: props.prefferedUsername,
      couponsNumber: props.couponsNumber

    }
    console.log(data)
    const response = await fetch('https://earnhive.vercel.app/api/vendor/vendor-approve', {
      body: JSON.stringify(data),
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
  if (props.couponsNumber > 0)




    return (<li className={classes.vendorItem}>

      <div className={approvedClass}>


        <div className={classes.itemBody}>
          <div className={classes.figure}>
            <img src={props.passport} alt={props.prefferedUsername} />
          </div>
          <h3>{props.firstname}</h3>
          <h5>{props.lastname}</h5>

          <p>{props.approved}</p>
          <p>{props.prefferedUsername}</p>
          <form onSubmit={setApprove}>
            <input type='text'
              value={props.couponsNumber}
              readOnly
            />
            {approveBtn}
          </form>

          <p>{props.couponRequestDate}</p>



          <button onClick={showDetailsHandler} className={classes.vendorBtn}>Vendor Details</button>

          {disapproveBtn}
        </div>

      </div>


    </li>
    )
}

export default VendorItem