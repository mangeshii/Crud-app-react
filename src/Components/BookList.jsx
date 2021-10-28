import {Link} from 'react-router-dom';
import { ListGroup,ListGroupItem,Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const BookList=()=>{
    return(
        <>
        <ListGroup>
            <ListGroupItem style={{display:'flex', fontWeight:'bold'}}>
                <div className="col-md-3 ">
                    Title
                </div>
                <div className="col-md-3">
                    Author
                </div>
                <div className="col-md-3">
                    Genre
                </div>
                <div className="col-md-3">
                    Actions
                </div>
            </ListGroupItem>
            <ListGroupItem style={{display:'flex'}}>
                <div className="col-md-3">
                    The Monk Who Sold His Ferrari
                </div>
                <div className="col-md-3">
                        Robin Sharma
                </div>
                <div className="col-md-3">
                    Fiction
                </div>
                <div className="col-md-3">
                    <Link className="btn btn-warning" to='/edit/:id'>Edit</Link>
                    <Button className="btn btn-danger">Delete</Button>
                </div>
            </ListGroupItem>

        </ListGroup>
        </>
    )
    }

export default BookList
