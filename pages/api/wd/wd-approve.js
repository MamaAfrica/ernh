import connectDB from "@/utils/connectmongo";
const Users = require('../../../model/registerSchema')


async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const{totalWithdrawal,username} = req.body

            console.log({activeState} )
            await connectDB()
              const user = await findOne({username:username})
              const userTotalW = user.totalWithdrawal
            const newTw = userTotalW + totalWithdrawal

            await Users.findOneAndUpdate({ username: username }, {
                $set: {
                    totalWithdrawal: newTw,
                    packagec:"Hivenaira N 4500",
                            
                }
            })

            
           
     
           
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler


