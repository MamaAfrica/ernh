import connectDB from "../../../utils/connectmongo"
 import Admin from '../../../model/adminSchema'
 
import mongoose from "mongoose"
const bcrypt = require('bcrypt')
 




async function handler(req, res) {
  
    if (req.method === 'POST') {
        try {
             
            const { username, password } = req.body
            console.log('Connecting to Mongo')
            await connectDB()
            console.log('Connected to Mongo')
            console.log('Creating document')
            const hashedPassword = await bcrypt.hash(password, 10)
            const doc = new Admin({
                _id: new mongoose.Types.ObjectId(),
                username: username,
                password: hashedPassword,
                 
            })
            await doc.save()
            console.log(doc)
            res.json({ doc })

        } catch (error) {
            console.log(error)


        }

    }


}

export default handler
