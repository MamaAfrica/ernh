import connectDB from "../../../utils/connectmongo"
import Users from "../../../model/registerSchema"

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

            const { firstname, lastname, username, password, phone, country, coupon, packagec, role, welcomeBonus, referalBonus, indirectReferalBonus, secondIndirectRBonus, hivepostOne, hivepostTwo, dailyLogin, hiveGame, referral, totalWithdrawal, registeredDate, loginDate, bank, accountNumber, bankName, passport, pin, signUpDate } = req.body

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
                const user = await Users.findOne({ refUsername: referral })
                const userID = user._id
                const referreduser = Users.findByIdAndUpdate(
                    userID,
                    { "$push": { "referredUsers": refUsername } },

                    { "new": true, "upsert": true },


                ).then(function (err, managerparent) {
                    if (err) throw err;
                    console.log(managerparent);
                })
                console.log(referreduser)


                // console.log(referreduser)
                // console.log(referreduser.referredUsers)
                // await referreduser.populate('referredUsers')
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
                loginDate: loginDate,
                bank: bank,
                accountNumber: accountNumber,
                bankName: bankName,
                passport: passport,
                pin: pin,
                signUpDate: signUpDate,
                welcomeEarning: `Welcome Bonus: ${welcomeBonus}H || Date: ${currentDate}`,
                referralEarning: " ",
                iReferralEarning:" ",
                dLoginEarning:" ",
                hivePostEarning:" ",


            })


            //creating referal Bonus
            if (referral !== "Admin") {
                console.log('creating referral bonus')

                const referreduser = await Users.findOne({ refUsername: referral })
                let userReferalBonus = referreduser.referalBonus + 3500
                await Users.findOneAndUpdate({ refUsername: referral }, { $set: { referalBonus: userReferalBonus } })

                //creating referral update report
                const refReport = `Referral Bonus: N3,500 || Referred User: ${refUsername} || Date: ${currentDate}`
                await Users.findOneAndUpdate({ refUsername: referral }, { $set: { referralEarning: refReport } })
            }
            //creating indirect referral bonus


            if (referral !== "Admin") {
                const referreduser = await Users.findOne({ refUsername: referral })
                let ror = referreduser.referral
                if (ror !== "Admin") {
                    let foundror = await Users.findOne({ refUsername: ror })

                    //creating in diirect referral update report
                    const iRefReport = `Indirect Referral Bonus: 300H || Referred User: ${referral} || Date: ${currentDate}`
                    await Users.findOneAndUpdate({ refUsername: ror }, { $set: { iReferralEarning: iRefReport } })

                     //creating second in diirect referral update report
                     const sIRefReport = ` Second Indirect Referral Bonus: 100H || Referred User: ${refUsername} || Date: ${currentDate}`
                     await Users.findOneAndUpdate({ refUsername: ror }, { $set: { iReferralEarning: sIRefReport } })

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
