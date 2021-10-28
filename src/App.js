import UserTable from "./Table/UserTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Style/Style.css";
import AddUser from "./Forms/AddUser";
import EditUser from "./Forms/EditUser";
import { useState } from "react";
function App() {
    const usersData = [
        { id: 1, name: "Tania", username: "floppydiskette" },
        { id: 2, name: "Craig", username: "siliconeidolon" },
        { id: 3, name: "Ben", username: "benisphere" },
    ];
    const initialFormState = { id: null, name: "", username: "" };
    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialFormState);

    const removeUser = (id) => {
        setEditing(false);
        setUsers(
            users.filter((user) => {
                return user.id !== id;
            })
        );
    };

    const adduser = (user) => {
        user.id = users.id + 1;
        setUsers([...users, user]);
    };

    const editRow = (user) => {
        setEditing(true);

        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username,
        });
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };

    return (
        <div className="container">
            <h1> CRUD Application</h1>
            <div className="flex-row">
                <div className="flex-large col-md-4">
                    {editing ? (
                        <>
                            <h2>Edit User</h2>
                            <EditUser
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </>
                    ) : (
                        <>
                            <AddUser adduser={adduser} />
                        </>
                    )}
                </div>
                <div className="flex-large col-md-7">
                    <UserTable
                        users={users}
                        editRow={editRow}
                        removeUser={removeUser}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
