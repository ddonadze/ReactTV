import Navbar from 'react-bootstrap/Navbar' 

// import Container from' react-bootstrap/Container';

const NavBar = () => {
    return (
        <Navbar fixed="top" sticky="top" expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">React-TV</Navbar.Brand>
        </Navbar>
    )
}

export default NavBar