import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../Style/Style.css";

const AddUser = (props) => {
    const { adduser } = props;
    const InitialState = {
        id: null,
        name: "",
        username: "",
    };
    const [newUser, setNewUser] = useState(InitialState);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewUser({ ...newUser, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        adduser(newUser);
    };
    return (
        <>
            <h2 className='add'>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    aria-label=".form-control-lg example"
                    onChange={handleChange}
                    name="name"
                    value={newUser.name}
                ></input>
                <label>Username</label>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    aria-label=".form-control-lg example"
                    onChange={handleChange}
                    name="username"
                    value={newUser.username}
                ></input>
                <button type="submit" class="add-btn btn-primary">
                    ADD
                </button>
            </form>
        </>
    );
};
export default AddUser;
