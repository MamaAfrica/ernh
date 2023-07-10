import connectDB from "../../../utils/connectmongo"
import Users from "../../../model/registerSchema"
 
import mongoose from "mongoose"
const bcrypt = require('bcrypt')
 




async function handler(req, res) {
   
    if (req.method === 'POST') {
        try {
             
            const {firstname,lastname, username, password, phone, country, coupon, packagec,role,welcomeBonus,referalBonus,indirectReferalBonus,secondIndirectRBonus,hivepostOne,hivepostTwo,dailyLogin ,hiveGame,referral} = req.body

            //creating a username with email
            const refUsername = username.slice(0,username.indexOf('@'))
            const refLink = `http://localhost:3000/referral/${refUsername}`
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
                refUsername:refUsername,
                refLink:refLink,
                phone: phone,
                country: country,
                coupon: coupon,
                packagec: packagec,
                role:role,
                welcomeBonus:welcomeBonus,
                referalBonus:referalBonus,
                indirectReferalBonus:indirectReferalBonus,
                secondIndirectRBonus:secondIndirectRBonus,
                hivepostOne:hivepostOne,
                hivepostTwo:hivepostTwo,
                dailyLogin:dailyLogin,
                hiveGame:hiveGame,
                referral:referral



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
