import connectDB from "@/utils/connectmongo";
const Users = require('../../../model/registerSchema')
const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();

// we will display the date as DD-MM-YYYY 

let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const{enteredWithdrawal,requestedWithdrawal,username} = req.body

            console.log({enteredWithdrawal,requestedWithdrawal,username} )
            await connectDB()
            // set packagec to unapproved withdrawal to ensure the user cannot demand for another withdrawal untill this one has been approved
            await Users.findOneAndUpdate({ username: username }, {
                $set: {
                    withdrawalType: enteredWithdrawal,
                    requestedWithdrawal:requestedWithdrawal,
                    withdrawalRequestDate: currentDate,
                    packagec: 'unapproved withdrawal'
                }
            })
             res.status(200).json({message:'updated'})
             
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler


