
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";
import { GlobalProvider } from "../src/Context/GlobalState"

function App() {
    return (

        <div style={{maxWidth:'70rem',margin:'4rem auto'}}>
        <GlobalProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={AddBook} />
                    <Route exact path="/edit/:id" component={EditBook} />
                </Switch>
            </Router>
        </GlobalProvider>
        </div>



    );
}

export default App;











