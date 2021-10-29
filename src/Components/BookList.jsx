import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = () => {
    const { users } = useContext(GlobalContext);
    console.log(users);
    return (
        <>
            <ListGroup>
                <ListGroupItem style={{ display: "flex", fontWeight: "bold" }}>
                    <div className="col-md-3 ">Title</div>
                    <div className="col-md-3">Author</div>
                    <div className="col-md-3">Genre</div>
                    <div className="col-md-3">Actions</div>
                </ListGroupItem>

                {users.map((user) => {
                    return (
                        <ListGroupItem style={{ display: "flex" }}>
                            <div className="col-md-3">
                                {user.title}
                            </div>
                            <div className="col-md-3">{user.author}</div>
                            <div className="col-md-3">{user.genre}</div>
                            <div className="col-md-3">
                                <Link
                                    className="btn btn-warning"
                                    to={`/edit/${user.id}`}
                                >
                                    Edit
                                </Link>
                                <Button className="btn btn-danger">
                                    Delete
                                </Button>
                            </div>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        </>
    );
};

export default BookList;
