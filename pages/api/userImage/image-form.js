import connectDB from "../../../utils/connectmongo"
const Users = require('../../../model/registerSchema')






async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectDB()


            // Get the current date and time
            const currentDate = new Date();

            // Subtract 24 hours from the current date
            const twentyFourHoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

            // Query transactions within the last 24 hours
            const transactions = await Users.find({ createdAt: { $gte: twentyFourHoursAgo, $lte: currentDate } })
            // console.log('aout')
            // console.log(transactions)

            const { enteredImage, refUsername } = req.body
            // console.log({ enteredImage, refUsername })

            const user = await Users.findOneAndUpdate({ refUsername: refUsername }, { $set: { passport: enteredImage } })

            res.status(200).json({message:'created'})
        } catch (error) {
            // console.log(error)
        }
    }
}

export default handler