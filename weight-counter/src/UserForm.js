import './UserForm.css';
import React, { useState } from "react";

function UserForm() {

    //add state to store name and file of data
    const[inputImage,setImage]=useState(null);
    const handleInput = event => {
        //prevent default form behaviour
        event.preventDefault();
        const formData=new FormData();
        formData.append("file",inputImage);

        fetch("https://api.cloudinary.com/v1_1/dpzbix45x/upload",{
            method:'POST',
            body:formData
        }).then(response=>response.json())
        .then(data=>{
            if (data.secure_url !== '') {
                this.setState({
                  uploadedFileCloudinaryUrl: data.secure_url
                });
            }
        }).catch(err=>console.error(err))
    }

    return(
        <div className="userInfo">
            <form onSubmit={handleInput}>
                <label>Upload Image</label>
                <input type="file" value={inputImage} onChange={(e)=>setImage(e.target.files[0])}/>
            </form>
        </div>
    )
}

export default UserForm;