import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const AddUser = () => {
    return (
        <>
            <Form>
                <FormGroup />
                <Label>Title</Label>
                <Input type="text" />
                <Label>Author</Label>
                <Input type="text" />
                <Label>Publisher</Label>
                <Input type="text" />
                <Button style={{margin:'1rem 0.6rem 0rem 0rem'}} type="submit">Submit</Button>
                <Link style={{margin:'1rem 0rem 0rem 0rem'}} to="/" className="btn btn-danger">
                    Cancel
                </Link>
            </Form>
        </>
    );
};
export default AddUser;
