import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
 const Admin = require('../../../model/adminSchema')
const bcrypt = require('bcrypt')
 
 
  
     
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{enteredImage, refUsername} = req.body
        console.log({enteredImage, refUsername})

     const user =   await Users.findOneAndUpdate({ refUsername: refUsername }, { $set: { passport: enteredImage } })
    
        res.status(200).json(user)     
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler