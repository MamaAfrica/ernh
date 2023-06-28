import {Schema, model,models} from 'mongoose'
const mongoose = require('mongoose')

const regSchema = new Schema({
    _id: Schema.Types.ObjectId,
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
    use:{
        type: String,
        require: true,
        trim: true
    },
    company:{
        type: String,
        require: true,
        trim: true
    },
    company:{
        type: String,
        require: true,
        trim: true
    },
    companyName:{
        type: String,
        require: true,
        minLength:[5,'company namecharacters must be greater five'],
        trim: true,
        toLowerCase:true,
    },
    message:{
        type: String,
        require: true,
        trim: true
    },

    recipients: [{ type: Schema.Types.ObjectId, ref: 'Recipients' }],
    birthdays: [{ type: Schema.Types.ObjectId, ref: 'Birthday' }]
})



// const Users = models.Users || model('Users',regSchema)
// export default Users

module.exports = models.Users|| mongoose.model('Users',regSchema)
