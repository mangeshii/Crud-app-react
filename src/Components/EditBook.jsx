import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../Context/GlobalState";
import { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const EditBook = (props) => {
    const initial = {
        id: "",
        title: "",
        author: "",
        genre: "",
    };
    const { books, editBook } = useContext(GlobalContext);
    const [selectedBook, setSelectedBook] = useState(initial);
    const currentBookId = props.match.params.id;
    const history = useHistory();

    useEffect(() => {
        const BookId = currentBookId;
        const selectedbook = books.find((book) => book.id === BookId);
        setSelectedBook(selectedbook);
    }, [currentBookId, books]);

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/");
        editBook(selectedBook);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedBook({ ...selectedBook, [name]: value });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup />
            <Label>Title</Label>
            <Input
                type="text"
                name="title"
                value={selectedBook.title}
                onChange={handleChange}
            />
            <Label>Author</Label>
            <Input
                type="text"
                name="author"
                value={selectedBook.author}
                onChange={handleChange}
            />
            <Label>Publisher</Label>
            <Input
                type="text"
                name="genre"
                value={selectedBook.genre}
                onChange={handleChange}
            />
            <Button style={{ margin: "1rem 0.6rem 0rem 0rem" }} type="submit">
                Edit
            </Button>
            <Link
                style={{ margin: "1rem 0rem 0rem 0rem" }}
                to="/"
                className="btn btn-danger"
            >
                Cancel
            </Link>
        </Form>
    );
};
export default EditBook;
