import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Style.css"

const EditUser = (props) => {
    const { setEditing, currentUser, updateUser } = props;
    const [user, setUser] = useState(currentUser);


    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(user.id, user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <>
            <h2 className="edit">Edit User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    aria-label=".form-control-lg example"
                    onChange={handleChange}
                    name="name"
                    value={user.name}
                ></input>
                <label>Username</label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    aria-label=".form-control-lg example"
                    onChange={handleChange}
                    name="username"
                    value={user.username}
                ></input>
                <button className="btn-upd btn-primary">UPDATE</button>
                <button
                    className="btn-can btn-primary"
                    onClick={() => setEditing(false)}
                >
                    CANCEL
                </button>
            </form>
        </>
    );
};
export default EditUser;
