import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const postSchema = new Schema({
    title: {
    type: String,
    require: true,
    minLength: [1, 'Firstname characters must be greater five'],
    toLowerCase: true,
    trim: true,
  
  },
  image: {
    type: String,
    require: true,
    trim: true
  
  },
  
  category: {
    type: String,
    require: true,
    
    trim: true,
     
  },
  description:{
    type: String,
    require: true,
    trim: true
},
 
   
})

module.exports = models.Post || mongoose.model('Post', postSchema)