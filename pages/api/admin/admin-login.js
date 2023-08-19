import connectDB from "../../../utils/connectmongo"
import Admin from '../../../model/adminSchema'
const bcrypt = require('bcrypt')
 
 
  
     
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{username, password} = req.body
        console.log({username, password})

        const user = await Admin.findOne({username}) 
        // console.log('i am an ADMIN')
         console.log(user)
         const validUser = await bcrypt.compare(password, user.password)
         console.log(validUser)
         if(!validUser){
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