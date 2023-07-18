import connectDB from "../../../utils/connectmongo"
const Users = require('../../../model/registerSchema')
const Admin = require('../../../model/adminSchema')
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
            await connectDB()
            const { username, password, role, newLogin } = req.body
            if (role === 'User') {
                console.log({ username, password })
                const user = await Users.findOne({ username })
                console.log(user)
                const validUser = await bcrypt.compare(password, user.password)
                console.log(validUser)
                if (!validUser) {
                    res.status(403).json({ message: 'not a user' })
                    return
                }
                // console.log(Number(newLogin))
                // console.log(Number(user.loginDate))
                // console.log(Number(newLogin)-Number(user.loginDate))

                await Users.findOneAndUpdate({ username: username }, {
                    $set: {
                        loginDate: newLogin
                    }
                })

                if (Number(newLogin) - Number(user.loginDate) !== 0) {

                    //creating login update report
                    const loginReport = `Daily Login Bonus: 300H || Date: ${currentDate}`
                    await Users.findOneAndUpdate({ username: username }, { $set: { dLoginEarning: loginReport } })

                    //creating an increase of 300H for daily Login
                    let dl = user.dailyLogin + 300
                    await Users.findOneAndUpdate({ username: username }, {
                        $set: {
                            dailyLogin: dl
                        }
                    })

                }
                res.status(200).json(user);
            } else if (role === 'Admin') {
                console.log({ username, password })
                const user = await Admin.findOne({ username })
                console.log(user)
                const validUser = await bcrypt.compare(password, user.password)
                console.log(validUser)
                if (!validUser) {
                    res.status(403).json({ message: 'not an Admin' })
                    return
                }
                res.status(200).json(user);
            }







        } catch (error) {
            console.log(error)
        }
    }
}

export default handler