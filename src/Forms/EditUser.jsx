import { useState } from "react";

const EditUser = (props) => {
    const {setEditing, currentUser, updateUser } = props;

    const [user, setUser] = useState(currentUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(user.id, user);
    };

    const handleChange=(event)=>{
        const { name, value } = event.target
        setUser({...user,[name]:value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
                onChange={handleChange}
                name="name"
                value={user.name}
            ></input>
            <label>Username</label>
            <input
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
                onChange={handleChange}
                name="username"
                value={user.username}
            ></input>
            <button>Update user</button>
            <button class="btn btn-primary" onClick={()=>setEditing(false)}>
                CANCEL
            </button>
        </form>
    );
};
export default EditUser;
