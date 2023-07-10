import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const adminSchema = new Schema({
  firstname: {
    type: String,
    require: true,
    minLength: [1, 'Firstname characters must be greater five'],
    toLowerCase: true,
    trim: true,
  
  },
  lastname: {
    type: String,
    require: true,
    minLength: [1, 'Lastname characters must be greater five'],
    toLowerCase: true,
    trim: true,
  
  },
  
  username: {
    type: String,
    require: true,
    minLength: [5, 'email characters must be greater five'],
    toLowerCase: true,
    trim: true,
    unique: true
  },
  password:{
    type: String,
    require: true,
    trim: true
},
role:{
  type:String
}
   
})

module.exports = models.Admin || mongoose.model('Admin', adminSchema)