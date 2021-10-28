import UserTable from "./Table/UserTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Style/Style.css";
import AddUser from "./Forms/AddUser";
import { useState } from "react";
function App() {
    const usersData = [
        { id: 1, name: "Tania", username: "floppydiskette" },
        { id: 2, name: "Craig", username: "siliconeidolon" },
        { id: 3, name: "Ben", username: "benisphere" },
    ];
    const [users, setUsers] = useState(usersData);

    const removeUser = (id) => {
        setUsers(
            users.filter((user) => {
                return user.id !== id;
            })
        );
    };
    return (
        <div className="container">
            <h1> CRUD Application</h1>
            <div className="flex-row">
                <div className="flex-large col-md-4">
                    <AddUser />
                </div>
                <div className="flex-large col-md-7">
                    <UserTable users={users} removeUser={removeUser} />
                </div>
            </div>
        </div>
    );
}

export default App;
