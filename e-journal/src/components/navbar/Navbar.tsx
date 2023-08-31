import { Nav, Navbar, Offcanvas } from "react-bootstrap"
import { RootState } from "../../Redux/store";
import { useAppSelector } from "../../Redux/storehooks";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const user = useAppSelector((state: RootState) => state.user);
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={Math.random()} expand={expand} className="">
                    {/* <Container fluid> */}
                        <Navbar.Brand as={NavLink} to="/">ЛІЧИТЬ ЗУБИ</Navbar.Brand>
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
                                        as={NavLink}
                                        to={"/"}
                                    >
                                        ГОЛОВНА
                                    </Nav.Link>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/profile/1111"
                                    >
                                        МІЙ ПРОФІЛЬ
                                    </Nav.Link>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/admin/2222">
                                        АДМІНКА
                                    </Nav.Link>
                                    {
                                        !user.isLogin ?
                                            <Nav.Link
                                                as={NavLink}
                                                className="rounded-xl shadow-lg shadow-blue-500"
                                                to="/auth">
                                                АВТОРИЗУВАТИСЯ
                                            </Nav.Link>
                                            :
                                            <Nav.Link
                                                as={NavLink}
                                                className="rounded-xl shadow-lg shadow-blue-500"
                                                to="">
                                                {user.user.firstName + " " + user.user.lastName[0]}.
                                            </Nav.Link>
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    {/* </Container> */}
                </Navbar>
            ))}
        </>
    )
}