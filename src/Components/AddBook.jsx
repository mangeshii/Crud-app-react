import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { useContext, useState} from "react";
import { v4 as uuid } from "uuid";

const AddBook = () => {
    const initialstate = {
        id: uuid(),
        title: "",
        author: "",
        genre: "",
    };
    const { AddBook} = useContext(GlobalContext);
    const [newBook, setNewBook] = useState(initialstate);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/");
        AddBook(newBook);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup />
                <Label>Title</Label>
                <Input
                    type="text"
                    name="title"
                    value={newBook.title}
                    onChange={handleChange}
                />
                <Label>Author</Label>
                <Input
                    type="text"
                    name="author"
                    value={newBook.author}
                    onChange={handleChange}
                />
                <Label>Publisher</Label>
                <Input
                    type="text"
                    name="genre"
                    value={newBook.genre}
                    onChange={handleChange}
                />
                <Button
                    style={{ margin: "1rem 0.6rem 0rem 0rem" }}
                    type="submit"
                >
                    Submit
                </Button>
                <Link
                    style={{ margin: "1rem 0rem 0rem 0rem" }}
                    to="/"
                    className="btn btn-danger"
                >
                    Cancel
                </Link>
            </Form>
        </>
    );
};
export default AddBook;
