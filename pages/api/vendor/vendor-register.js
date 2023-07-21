import connectDB from "../../../utils/connectmongo"
 import Vendor from '../../../model/vendorSchema'
 
import mongoose from "mongoose"
const bcrypt = require('bcrypt')
 
//creating the date of referral
const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;



async function handler(req, res) {
  
    if (req.method === 'POST') {
        try {
             
            const {firstname,lastname,prefferedUsername, username,phone, password,role } = req.body
            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            const hashedPassword = await bcrypt.hash(password, 10)
            const doc = new Vendor({
                _id: new mongoose.Types.ObjectId(),
                firstname: firstname,
                lastname: lastname,
                username: username,
                prefferedUsername:prefferedUsername,
                password: hashedPassword,
                phone:phone,
                role:role,
                approved: false,
                couponsNumber:0,
                status: 'active',
                registerdDate: currentDate,
                couponRequestDate:'',
                lastLoginDate: '',
                soldCoupons: 0,
                UnsoldCoupons: 0,
                UpaidsoldCoupons: 0,
              
                 
            })
            await doc.save()
            console.log(doc)
            res.json({ doc })

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
