import UserTable from "./Table/UserTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Style/Style.css"
import AddUser from "./Forms/AddUser";
function App() {
    return (
        <div className="container">
            <h1> CRUD Application</h1>
            <div className="flex-row">
                <div className="flex-large col-md-5">
                    <AddUser/>
                </div>
                <div className="flex-large col-md-7">
                    <UserTable/>
                </div>
            </div>
        </div>
    );
}

export default App;
