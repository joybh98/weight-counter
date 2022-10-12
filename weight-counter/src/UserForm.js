import './UserForm.css';

function UserForm() {
    let userInfo= {
        image: '',
        weight: 0,
        date: ''
    }

    //get user info
    const getUserInfo = (event) => {
        //prevent initial loading
        event.preventDefault();
        alert('User info was gotten');
    }

    return(
        <div className="userInfo">
            <form onSubmit={getUserInfo}>
                <label>Image</label>
                <input type="file"/>
            </form>
        </div>
    )
}

export default UserForm;