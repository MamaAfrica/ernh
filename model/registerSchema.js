import {Schema, model,models} from 'mongoose'
const mongoose = require('mongoose')

const regSchema = new Schema({
    _id: Schema.Types.ObjectId,
    firstname:{
        type: String,
        require: true,
        minLength:[5,'email characters must be greater five'],
        toLowerCase:true,
        trim: true,
        unique: true
      },
      lastname:{
        type: String,
        require: true,
        minLength:[5,'email characters must be greater five'],
        toLowerCase:true,
        trim: true,
        unique: true
      },
      username:{
        type: String,
        require: true,
        minLength:[5,'email characters must be greater five'],
        toLowerCase:true,
        trim: true,
        unique: true
      },
      password:{
        type: String,
        require: true,
        trim: true
    },
    phone:{
        type: Number,
        require: true,
        trim: true
    },
    country:{
        type: String,
        require: true,
         
    },
    coupon:{
        type: String,
        require: true,
        trim: true
    },
    packagec:{
        type: String,
        require: true,
        
        trim: true,
     
    },
     

    // recipients: [{ type: Schema.Types.ObjectId, ref: 'Recipients' }],
    // birthdays: [{ type: Schema.Types.ObjectId, ref: 'Birthday' }]
})



// const Users = models.Users || model('Users',regSchema)
// export default Users

module.exports = models.Users|| mongoose.model('Users',regSchema)
