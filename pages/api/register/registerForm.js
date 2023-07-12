import connectDB from "../../../utils/connectmongo"
import Users from "../../../model/registerSchema"

import mongoose from "mongoose"
const bcrypt = require('bcrypt')





async function handler(req, res) {

    if (req.method === 'POST') {
        try {

            const { firstname, lastname, username, password, phone, country, coupon, packagec, role, welcomeBonus, referalBonus, indirectReferalBonus, secondIndirectRBonus, hivepostOne, hivepostTwo, dailyLogin, hiveGame, referral, totalWithdrawal, registeredDate,loginDate } = req.body

            //creating a username with email
            const refUsername = username.slice(0, username.indexOf('@'))
            //craeating referral link
            const refLink = `http://localhost:3000/referral/${refUsername}`


            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')

            //creating downline
            if (referral !== "Admin") {
                console.log(referral)
                const referreduser = await Users.findOne({ refUsername: referral })

                console.log(referreduser)
                console.log(referreduser.referredUsers)
                await referreduser.populate('referredUsers')
                //  referreduser.referredUsers.push(refUsername)
                //  console.log(referreduser.referredUsers)
            }
            const hashedPassword = await bcrypt.hash(password, 10)
            const doc = new Users({
                _id: new mongoose.Types.ObjectId(),
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: hashedPassword,
                refUsername: refUsername,
                refLink: refLink,
                phone: phone,
                country: country,
                coupon: coupon,
                packagec: packagec,
                role: role,
                welcomeBonus: welcomeBonus,
                referalBonus: referalBonus,
                indirectReferalBonus: indirectReferalBonus,
                secondIndirectRBonus: secondIndirectRBonus,
                hivepostOne: hivepostOne,
                hivepostTwo: hivepostTwo,
                dailyLogin: dailyLogin,
                hiveGame: hiveGame,
                referral: referral,
                totalWithdrawal: totalWithdrawal,
                registeredDate: registeredDate,
                loginDate:loginDate






            })


            //creating referal Bonus
            if (referral !== "Admin") {
                // console.log(referral)
                const referreduser = await Users.findOne({ refUsername: referral })
                let userReferalBonus = referreduser.referalBonus + 3500
                await Users.findOneAndUpdate({ refUsername: referral }, { $set: { referalBonus: userReferalBonus } })
            }
            //creating indirect referral bonus


            if (referral !== "Admin") {
                const referreduser = await Users.findOne({ refUsername: referral })
                let ror = referreduser.referral
                if (ror !== "Admin") {
                    let foundror = await Users.findOne({ refUsername: ror })

                    let irb = foundror.indirectReferalBonus + 300
                    let sib = foundror.secondIndirectRBonus + 100
                    await Users.findOneAndUpdate({ refUsername: ror }, {
                        $set: {
                            indirectReferalBonus: irb
                        }
                    })
                    await Users.findOneAndUpdate({ refUsername: ror }, {
                        $set: {
                            secondIndirectRBonus: sib
                        }
                    })
                }


            }
            //creating second indirect referral bonus
            await doc.save()
            // console.log(doc)
            res.json({ doc })


        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
