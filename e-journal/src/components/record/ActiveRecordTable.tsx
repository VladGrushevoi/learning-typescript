import { useState } from "react"
import { Button, Col, Row, Modal } from "react-bootstrap"
import { ChatLeftText, CheckSquareFill, PersonCircle, XSquareFill } from "react-bootstrap-icons"

interface ActiveRecordsTableProps {

}

export const ActiveRecordsTable = ({  } : ActiveRecordsTableProps) => {

    const [modalInfoUser, setModalInfoUser] = useState({ show: false, user: { name: "", phone: "", comment: "" } })

    const handleShowInfoUser = (user: { name: string, phone: string, comment: string }) => {
        setModalInfoUser({ show: true, user: user })
    }

    const closeModalInfoUser = () => {
        setModalInfoUser({ show: false, user: { name: "", phone: "", comment: "" } })
    }

    return (
        <>
            <Row className="text-center">
                <Col xs={2} sm={2} md={5}>ПАЦІЄНТ</Col>
                <Col xs={5} sm={3} md={3}>ДАТА</Col>
                <Col>ЧАС</Col>
                <Col ></Col>
            </Row>
            {
                Array.from({ length: 5 }).map((_, index) => {
                    return (
                            <Row key={index+index*2} className="my-2 text-center justify-center items-center">
                                <Col xs={2} sm={2} md={5}>
                                    <Col md={10} className="md:inline-block hidden">
                                        <Row md={8} className="justify-center items-center">
                                            <Col md={10}>
                                                <Row>{`PETRO PETRENKO ${index}`}</Row>
                                                <Row>+380966051501</Row>
                                            </Col>
                                            <Col
                                                className="md:inline-block hidden p-1 rounded-xl cursor-pointer"
                                                onClick={() => handleShowInfoUser({ name: `PETRO ${index}`, phone: `${index}${index}`, comment: `comment ${index}` })}
                                            >
                                                <ChatLeftText className="hover:fill-blue-400" size={20} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col
                                        className="md:hidden inline-block border border-black p-1 hover:bg-blue-400 rounded-xl cursor-pointer"
                                        onClick={() => handleShowInfoUser({ name: `PETRO ${index}`, phone: `${index}${index}`, comment: `comment ${index}` })}
                                    >
                                        <PersonCircle size={20} />
                                    </Col>
                                </Col>
                                <Col xs={5} sm={3} md={3}>
                                    Вівт. 18.07.23
                                </Col>
                                <Col>
                                    11:00
                                </Col>
                                <Col className="flex gap-2  items-center">
                                    <CheckSquareFill size={20} className="hover:fill-green-400" />
                                    <XSquareFill size={20} className="hover:fill-red-400" />
                                </Col>
                            </Row>
                    )
                })
            }

            <Modal show={modalInfoUser.show} onHide={closeModalInfoUser}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>NAME: {modalInfoUser.user.name}</p>
                    <p>PHONE: {modalInfoUser.user.phone}</p>
                    <p>COMMNENT: {modalInfoUser.user.comment}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModalInfoUser}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModalInfoUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}