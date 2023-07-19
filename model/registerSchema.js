import {Schema, model,models} from 'mongoose'
const mongoose = require('mongoose')

const regSchema = new Schema({
    _id: Schema.Types.ObjectId,
    firstname:{
        type: String,
        require: true,
        minLength:[2,'firstname characters must be greater five'],
        toLowerCase:true,
        trim: true,
      
      },
      lastname:{
        type: String,
        require: true,
        minLength:[2,'lastname characters must be greater five'],
        toLowerCase:true,
        trim: true,
     
      },
      username:{
        type: String,
        require: true,
        minLength:[10,'username characters must be greater 10'],
        toLowerCase:true,
        trim: true,
        unique: true
      },
      password:{
        type: String,
        require: true,
        trim: true
    },
    refUsername:{
      type:String,
    },
    refLink:{
      type:String,
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
    role:{
      type:String
    },
    welcomeBonus:{
      type:Number
    },
    referalBonus:{
      type:Number
    },
    indirectReferalBonus:{
      type:Number
    },
    secondIndirectRBonus:{
      type:Number
    },
    hivepostOne:{
      type:Number
    },
    hivepostTwo:{
      type:Number
    },
    
    dailyLogin:{
      type:Number
    },
    hiveGame:{
      type:Number
    },
    totalWithdrawal:{
      type:Number
    },
    registeredDate:{
      type:Number
    },
    loginDate:{
      type:Number
    },
    
    referral:{
      type:String
    },
    bank:{
      type:String
    },
    accountNumber:{
      type:String
    },
    bankName:{
      type:String
    },
    passport:{
      type:String
    },
    
    pin:{
      type:Number
    },
    signUpDate:{
      type:String
    },
    welcomeEarning:{
      type:String
    },
    referralEarning:{
      type:String
    },
    iReferralEarning:{
      type:String
    },
    sIReferralEarning:{
      type:String
    },
    hivePostEarning:{
      type:String
    },
    dLoginEarning:{
      type:String
    },
    hivePostOneDate:{
      type:Number
    },
    hivePostTwoDate:{
      type:Number
    },

    
    // referredUsers:[{type:String}]
    referredUsers:{
      type:Array,
      default:''
    }
    
     

    // recipients: [{ type: Schema.Types.ObjectId, ref: 'Recipients' }],
    // birthdays: [{ type: Schema.Types.ObjectId, ref: 'Birthday' }]
})



// const Users = models.Users || model('Users',regSchema)
// export default Users

module.exports = models.Users|| mongoose.model('Users',regSchema)
