import './UserForm.css';
import React, { useState } from "react";

function UserForm() {

    const [image,setImage]=useState('');

    const handleFile = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    const submitImage=()=>{
        //call api
    }
    return(
        <div className="userInfo">
            <label>Select File</label>
            <input type="file" name="file" onChange={(e)=>handleFile(e)}/>
            <button onClick={submitImage()}>Upload</button>
        </div>
    )
}

export default UserForm;