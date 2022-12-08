const User = require('../models/userModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')




exports.getAllUsers= catchAsync(async(req,res,next)=>{
      const user = await User.find({})
      res.status(200).json(user)
})




