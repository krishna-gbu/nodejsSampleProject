const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const AppError = require('./utils/appError');
const app = express();


mongoose.set('strictQuery',false);

mongoose.connect(
    'mongodb://localhost:27017/sample',
    {},
    (err)=>{
       err ? err.message : console.log('mongdb connecton ok');
    }
    )


app.get('/', (req, res) => {
    res.status(200).json({message:'ok'})
})



app.use('/api/v1/users',userRouter)


app.all('*', (req, res,next) => {
    next(new AppError('no url found fuck you',404))
})


const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
