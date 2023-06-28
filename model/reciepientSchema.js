import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const recipientSchema = new Schema({
  startDate: {
    type: String
  },
  startTime: {
    type: String
  },
  endDate: {
    type: String
  },
  checked:[{type:String}],
  fullname: {
    type: String,
    require: true,
    minLength: [5, 'fullname characters must be greater five'],
    toLowerCase: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    minLength: [5, 'email characters must be greater five'],
    toLowerCase: true,
    trim: true,
    unique: true
  },
  phone: {
    type: Number,
    require: true,
   
    trim: true,
  },
  mtext: {
    type: String,
    require: true,
    trim: true
  },
  userID: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
})

module.exports = models.Recipients || mongoose.model('Recipients', recipientSchema)