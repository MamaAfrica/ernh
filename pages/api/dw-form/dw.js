import connectDB from "@/utils/connectmongo";
const Users = require('../../../model/registerSchema')


async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const{activeState} = req.body

            console.log({activeState} )
            await connectDB()
             if(activeState==='deactivate'){
                // const user = await Users.find({activeWithdrawal:true})
                // console.log(user)
                
                await Users.updateMany({ activeWithdrawal: true }, {
                    $set: {
                        activeWithdrawal: false
                    }
                })
                res.status(200).json({message:'deactivated'})
             } else if(activeState==='activate'){
                await Users.updateMany({ activeWithdrawal: false }, {
                    $set: {
                        activeWithdrawal: true
                    }
                })
                res.status(200).json({message:'activated'})
             }
            

            
           
     
           
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler


