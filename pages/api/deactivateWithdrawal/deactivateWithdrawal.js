import connectDB from "@/utils/connectmongo";
import Vendor from '../../../model/vendorSchema'


async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const{enteredWithdrawal,enteredAmount,refUsername} = req.body

            console.log({enteredWithdrawal,enteredAmount,refUsername} )
            await connectDB()
             
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler


