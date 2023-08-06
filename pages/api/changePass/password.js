import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
  
const bcrypt = require('bcrypt')
 
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{enteredEmail, enteredPassword} = req.body
      
            console.log({enteredEmail, enteredPassword})
            const user = await Users.findOne({username:enteredEmail})
            console.log(user)
            const hashedPassword = await bcrypt.hash(enteredPassword, 10)
            await Users.findOneAndUpdate({ username: enteredEmail }, {
                $set: {
                    password: hashedPassword
                }
            })
           
            if(!user){
               res.status(403).json({message:'not a user'})
             return
            }
         
            res.status(200).json({message:'created'})
         
         
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler