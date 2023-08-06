import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
  
const bcrypt = require('bcrypt')
 
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{bank, bankName,accountNumber,pin,username} = req.body
      
            // console.log({bank, bankName,accountNumber,pin,username})
            const user = await Users.findOne({username:username})
            // console.log(user)
        
            await Users.findOneAndUpdate({ username: username },{$set:{bank:bank,bankName:bankName,accountNumber:accountNumber,pin:pin}})
           
            if(!user){
               res.status(403).json({message:'not a user'})
             return
            }
         
            res.status(200).json(user);
         
         
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler