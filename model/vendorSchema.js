import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const vendorSchema = new Schema({
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
        minLength: [1, 'Lastname characters must be greater five'],
        toLowerCase: true,
        trim: true,

    },

    prefferedUsername: {
        type: String,
        require: true,
        minLength: [1, 'prefferedUsername characters must be greater five'],

        trim: true,

    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    phone:{
        type: String
    },
    passport:{
        type: String
    },
    bank:{
        type: String
    },
    link:{
        type: String
    },

    role: {
        type: String
    },
    approved: {
        type: Boolean
    },
    couponsNumber: {
        type: Number
    },
    status: {
        type: String
    },
    soldCoupons: {
        type: Number
    },
    UnsoldCoupons: {
        type: Number
    },
    UpaidsoldCoupons: {
        type: Number
    },
    registerdDate: {
        type: String
    },
    lastLoginDate: {
        type: String
    },
    couponRequestDate: {
        type: String
    },
    coupons: {
        type: Array,
        default: ''
    }


})

module.exports = models.Vendor || mongoose.model('Vendor', vendorSchema)