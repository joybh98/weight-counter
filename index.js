//imports
const express=require('express');
const app=express();

const userUpload=require('./routes/index.js');

//create middleware
app.use('/user',userUpload)
//port listen
app.listen(3001,()=>{
    console.log('Server is runningn')
})