const multer=require('multer');

const upload=multer({
    dest:'public/user'
})
exports.uploadImage=upload.single('photo');

exports.upload=(req,res)=>{
    console.log(req.file);
    res.status(200).json({
        success:"Success",
    });
}