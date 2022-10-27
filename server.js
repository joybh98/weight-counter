const express=require("express");
const multer=require("multer");
const path=require("path");
const app=express();

//middlware logic
const fileStorageEngine=multer.diskStorage({
    //set destination for the uploads
    //it contains the request from the server, the file and a callback function
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    // save file name as date+filename
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"--"+file.originalname)
    }
});

//middlware with our logic as storage key
const upload=multer({storage:fileStorageEngine});

//server post request
app.post('/single',upload.single('image'),(req,res)=>{
    //print the file data
    console.log(req.file);
    res.send('Single file upload success')
    //res.redirect('/home')
})
app.listen(3000);

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})