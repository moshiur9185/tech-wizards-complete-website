import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { isLoggedIn, loggedInInfo } from "../../Login/Login/LoginManager";

const HeaderNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // is logged in
    const isLogged = isLoggedIn();

    // sign out button Handle 
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo()
    return (
        <Navbar className="sticky-top" bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="/home" style={{ color: 'green', fontWeight: 'bold', fontSize: '30px' }}>TECH WIZARDS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ fontWeight: "bold" }} className="ml-auto ">
                        <Link className="nav-link mr-3 fw-bold" to="/home">Home</Link>
                        <Link className="nav-link mr-3 fw-bold" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link  mr-3 fw-bold" to="/services">Services</Link>
                        <Link className="nav-link  mr-3 fw-bold" to="/contact">Contacts</Link>
                    </Nav>
                    {
                        loggedInUser.email || isLogged ? <button style={{ textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75  bg-success" onClick={signOut}> Sign Out</button> :
                            <Link to="/login"><button style={{ textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-success">Sign In</button></Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;
