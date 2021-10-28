import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Style/Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
function App() {
    return (

        <div style={{maxWidth:'40rem',margin:'4rem auto'}}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={AddUser} />
                    <Route exact path="/edit/:id" component={EditUser} />
                </Switch>
            </Router>
        </div>


    );
}

export default App;















































// <div className="container">
//     <h1> CRUD Application</h1>
//     <div className="flex-row">
//         <div className="flex-large col-md-4">
//             {editing ? (
//                 <>

//                     <EditUser
//                         editing={editing}
//                         setEditing={setEditing}
//                         currentUser={currentUser}
//                         updateUser={updateUser}
//                     />
//                 </>
//             ) : (
//                 <>
//                     <AddUser adduser={adduser} />
//                 </>
//             )}
//         </div>
//         <div className="flex-large col-md-7">
//             <UserTable
//                 users={users}
//                 editRow={editRow}
//                 removeUser={removeUser}
//             />
//         </div>
//     </div>
// </div>

// const usersData = [
//     { id: 1, name: "Tania", username: "floppydiskette" },
//     { id: 2, name: "Craig", username: "siliconeidolon" },
//     { id: 3, name: "Ben", username: "benisphere" },
// ];
// const initialFormState = { id: null, name: "", username: "" };

// const [users, setUsers] = useState(usersData);
// const [editing, setEditing] = useState(false);
// const [currentUser, setCurrentUser] = useState(initialFormState);
// console.log(currentUser)

// const adduser = (user) => {
//     user.id = users.length + 1;
//     setUsers([...users, user]);
// };

// const removeUser = (id) => {
//     setEditing(false);
//     setUsers(
//         users.filter((user) => {
//             return user.id !== id;
//         })
//     );
// };

// const editRow = (user) => {
//     setEditing(true);
//     setCurrentUser({
//         id: user.id,
//         name: user.name,
//         username: user.username,
//     });
// };

// const updateUser = (id, updatedUser) => {
//     setEditing(false);
//     setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
// };

// return (
// );
