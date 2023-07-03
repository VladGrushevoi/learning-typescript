import { Row } from "react-bootstrap"
import { NavBar } from "../navbar/Navbar"

export const Header = () => {

    return (
        <>
            <Row className="h-[10vh] px-10 bg-gradient bg-slate-300 text-center rounded-b-2xl ">
                <NavBar />
            </Row>
        </>
    )
}