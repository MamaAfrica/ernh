import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const adminSchema = new Schema({
  
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
}
   
})

module.exports = models.Admin || mongoose.model('Admin', adminSchema)