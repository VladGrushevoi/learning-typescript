import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"

export const NavBar = () => {

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={Math.random()} expand={expand} className="">
                    <Container fluid>
                        <Navbar.Brand href="/">ЛІЧИТЬ ЗУБИ</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    МЕНЮ
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link
                                        href="/"
                                    >
                                        ГОЛОВНА
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/user/1111">
                                        МІЙ ПРОФІЛЬ
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}