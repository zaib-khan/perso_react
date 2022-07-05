import { Container, Nav, Navbar as NavBarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <NavBarBs sticky="top" className=" bg-white shadow-sm mb-3">
    <Container>
      <Nav>
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          Store
        </Nav.Link>
        <Nav.Link to="/About" as={NavLink}>
          About
        </Nav.Link>
      </Nav>
      <button
        type="button"
        style={{ width: '3rem', height: '3rem', position: 'relative' }}
        variant="outline-primary"
        className=" rounded-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div
          className=" rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: 'white',
            width: '1.5rem',
            height: '1.5rem',
            position: 'absolute',
            bottom: 0,
            right: 0,
            transform: 'translate(25%,25%)',
          }}>
          3
        </div>
      </button>
    </Container>
  </NavBarBs>
);

export default NavBar;
