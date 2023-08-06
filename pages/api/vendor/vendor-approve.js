import connectDB from "../../../utils/connectmongo"
import Vendor from '../../../model/vendorSchema'

 

//creating date for the coupon
const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;


async function handler(req, res) {

    if (req.method === 'POST') {
        try {

            const { email, prefferedUsername, couponsNumber } = req.body
             
            console.log({ email, prefferedUsername, couponsNumber })
            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            const user = await Vendor.findOne({ username: email })
            console.log(user)
            //a function that would create the number of coupon

           async function createCoupons(realNumber) {
            //crating an empty array of coupon that you will push new coupon into
            const newCoupons = []
            
     
                for (let i = 0; i < realNumber; i ++) {
                  let userInit = prefferedUsername.slice(0,5).toUpperCase()
                  let constInit = 'ERVN'
                  let secondInit = email.slice(1,4).toUpperCase()
                  let firstRad = Math.floor(Math.random()*23423)+1000
                  let secondRad = Math.floor(Math.random()*23)+10
                  let lastInit = 'UC'
                  let coupon = `${userInit}-${constInit}${secondInit}-${firstRad}-${secondRad}${lastInit}`

                  let CouponWithDate = `${coupon} ${currentDate}`
                  
                  newCoupons.push(CouponWithDate)
                  

                 
                }
               
                
                 //creating a push into the vendor array
                  const user = await Vendor.findOne({ username: email })
                  const userID = user._id
                  const vendorUser = Vendor.findByIdAndUpdate(
                      userID,
                      { "$push": { "approvedCoupons":newCoupons } },
  
                      { "new": true, "upsert": true },
  
  
                  ).then(function (err, managerparent) {
                      if (err) throw err;
                      console.log(managerparent);
                  })
                    //updating the vendor coupon number
                    await Vendor.findOneAndUpdate({ username: email }, { $set: {  couponsNumber: 0 } })
                  
              }
              
              createCoupons(couponsNumber);  


            //changing the approve status
            await Vendor.findOneAndUpdate({ username: email }, {
                $set: {
                    approved: true,
                },

            })



            res.status(200).json({message:'created'})

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
