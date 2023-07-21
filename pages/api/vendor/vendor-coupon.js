import connectDB from "../../../utils/connectmongo"
 import Vendor from '../../../model/vendorSchema'
 
import mongoose from "mongoose"
 



async function handler(req, res) {
  
    if (req.method === 'POST') {
        try {
             
            const {couponNumber,couponRequestDate,email } = req.body
            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            const user = Vendor.findOne({username:email})
            console.log(user)
            await Vendor.findOneAndUpdate({ username: email }, {
                $set: {
                    couponsNumber: couponNumber,
                    couponRequestDate:couponRequestDate
                },
                 
            })
             

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
