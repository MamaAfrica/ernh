import connectDB from "../../../utils/connectmongo"
 const Users = require('../../../model/registerSchema')
 const Admin = require('../../../model/adminSchema')
const bcrypt = require('bcrypt')
 
 
  
     
    
 async function handler(req,res){
    if(req.method === 'POST'){
        try {
        await connectDB()
        const{username, password,role,newLogin} = req.body
        if(role==='User'){
            console.log({username, password})
            const user = await Users.findOne({username})
            console.log(user)
            const validUser = await bcrypt.compare(password, user.password)
            console.log(validUser)
            if(!validUser){
               res.status(403).json({message:'not a user'})
             return
            }
           if(newLogin-user.loginDate>=100000){
         let dl =   user.dailyLogin + 300
         await Users.findOneAndUpdate({ username: username }, {
            $set: {
                dailyLogin: dl
            }
        })

           }
            res.status(200).json(user);
        } else if(role==='Admin'){
            console.log({username, password})
            const user = await Admin.findOne({username})
            console.log(user)
            const validUser = await bcrypt.compare(password, user.password)
            console.log(validUser)
            if(!validUser){
               res.status(403).json({message:'not an Admin'})
             return
            }
            res.status(200).json(user);
        }
       

        
        
        
         
         
        } catch (error) {
            console.log(error)
        }
    }
}

export default handler