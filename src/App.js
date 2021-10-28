import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Style/Style.css";
import UserTable from "./Table/UserTable";
import AddUser from "./Forms/AddUser";
import EditUser from "./Forms/EditUser";


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

    const adduser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const removeUser = (id) => {
        setEditing(false);
        setUsers(
            users.filter((user) => {
                return user.id !== id;
            })
        );
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
