import connectDB from "../../../utils/connectmongo"
import Users from "../../../model/registerSchema"
 
import mongoose from "mongoose"
const bcrypt = require('bcrypt')
 




async function handler(req, res) {
   
    if (req.method === 'POST') {
        try {
             
            const {firstname,lastname, username, password, phone, country, coupon, packagec } = req.body
            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            const hashedPassword = await bcrypt.hash(password, 10)
            const doc = new Users({
                _id: new mongoose.Types.ObjectId(),
                firstname:firstname,
                lastname:lastname,
                username: username,
                password: hashedPassword,
                phone: phone,
                country: country,
                coupon: coupon,
                packagec: packagec
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
