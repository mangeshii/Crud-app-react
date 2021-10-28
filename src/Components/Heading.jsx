import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavItem, NavbarBrand } from "reactstrap";

const Heading = () => {
    return (

            <Navbar style={{backgroundColor:'#232a31',maxWidth:'70rem'}}>
                <Container style={{display:'flex',flexDirection:'row',justifyContent:"space-between",margin:'1rem'}}>
                    <NavbarBrand style={{color:'white'}} href="/">Book <strong>Store</strong></NavbarBrand>
                    <Nav>
                        <NavItem >
                            <Link className="btn btn-success" to="/add">
                                Add New Book
                            </Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>

    );
};

export default Heading;
