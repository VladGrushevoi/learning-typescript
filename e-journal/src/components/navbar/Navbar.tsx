import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { RootState } from "../../Redux/store";
import { useAppSelector } from "../../Redux/storehooks";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const user = useAppSelector((state: RootState) => state.user);
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
                                    <NavLink
                                        to={"/"}
                                    >
                                        ГОЛОВНА
                                    </NavLink>
                                    <NavLink
                                        to="/profile/1111"
                                        >
                                        МІЙ ПРОФІЛЬ
                                    </NavLink>
                                    <NavLink
                                        to="/admin/2222">
                                        АДМІНКА
                                    </NavLink>
                                    {
                                        !user.isLogin ?
                                            <NavLink
                                                className="rounded-xl shadow-lg shadow-blue-500"
                                                to="/auth">
                                                АВТОРИЗУВАТИСЯ
                                            </NavLink>
                                            :
                                            <NavLink
                                                className="rounded-xl shadow-lg shadow-blue-500"
                                                to="">
                                                {user.Name +" "+ user.Surname[0]}.
                                            </NavLink>
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}