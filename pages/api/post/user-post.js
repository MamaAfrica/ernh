import connectDB from "../../../utils/connectmongo"
const Users = require('../../../model/registerSchema')

//creating the date of referral
const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

let postDate = `${currentDay}${currentMonth}${currentYear}`;


async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB()
            const { userEmail, hivepost } = req.body

            console.log({ userEmail })
            const user = await Users.findOne({ username: userEmail })
            //comparing the last time user posted and current date
            let dateOff = postDate - user.hivePostOneDate

            if ((hivepost.toLowerCase() === 'one' && dateOff !== 0) ||(user.hivePostOneDate === 0 && hivepost.toLowerCase() === 'one') ) {
                let hpo = user.hivepostOne + 200
                await Users.findOneAndUpdate({ username: userEmail }, {
                    $set: {
                        hivepostOne: hpo
                    }
                })
                await Users.findOneAndUpdate({ username: userEmail }, {
                    $set: {
                        hivePostOneDate: postDate
                    }
                })
                //updating hivePost report
                const postReport = `Hive Post Bonus: 200H || Post: Post-${hivepost} || Date: ${currentDate}`
                await Users.findOneAndUpdate({ username: userEmail }, {
                    $set: {

                        hivePostEarning: postReport
                    }
                })
            }
            if ((hivepost.toLowerCase() === 'two' && dateOff !== 0) || (user.hivePostTwoDate === 0 && hivepost.toLowerCase() === 'two')) {
                let hpo = user.hivepostTwo + 200
                await Users.findOneAndUpdate({ username: userEmail }, {
                    $set: {
                        hivepostTwo: hpo
                    }
                })
                await Users.findOneAndUpdate({ username: userEmail }, {
                    $set: {
                        hivePostTwoDate: postDate
                    }
                })
                //updating hivePost report
                const postReport = `Hive Post Bonus: 200H || Post: Post-${hivepost} || Date: ${currentDate}`
                await Users.findOneAndUpdate({ username: userEmail }, {
                    $set: {

                        hivePostEarning: postReport
                    }
                })
            }



            if (!user) {
                res.status(403).json({ message: 'not a user' })
                return
            }

            res.status(200).json(user);


        } catch (error) {
            console.log(error)
        }
    }
}

export default handler