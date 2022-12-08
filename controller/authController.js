const User = require('../models/userModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')



exports.signup = catchAsync(async(req,res,next)=>{
    // first validate user input date 


    const newUser = await User.create({
    
    })

    res.status(200).json({message: 'ok'})
})

