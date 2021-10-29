import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookList = () => {
    const { books, removeBook } = useContext(GlobalContext);

    return (
        <>
            <ListGroup>
                <ListGroupItem style={{ display: "flex", fontWeight: "bold" }}>
                    <div className="col-md-3 ">Title</div>
                    <div className="col-md-3">Author</div>
                    <div className="col-md-3">Genre</div>
                    <div className="col-md-3">Actions</div>
                </ListGroupItem>

                {books.map((book) => {
                    return (
                        <ListGroupItem key={book.id} style={{ display: "flex" }}>
                            <div className="col-md-3">{book.title}</div>
                            <div className="col-md-3">{book.author}</div>
                            <div className="col-md-3">{book.genre}</div>
                            <div className="col-md-3">
                                <Link
                                    className="btn btn-warning"
                                    to={`/edit/${book.id}`}
                                >
                                    Edit
                                </Link>
                                <Button onClick={()=>removeBook(book.id)} className="btn btn-danger">
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
