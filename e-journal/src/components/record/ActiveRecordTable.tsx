import { useState } from "react"
import { Button, Col, Row, Modal } from "react-bootstrap"
import { CheckSquareFill, PersonCircle, XSquareFill } from "react-bootstrap-icons"

export const ActiveRecordsTable = () => {

    const [modalInfoUser, setModalInfoUser] = useState({ show: false, user: { name: "", phone: "" } })

    const handleShowInfoUser = (user: { name: string, phone: string }) => {
        setModalInfoUser({ show: true, user: user })
    }

    const closeModalInfoUser = () => {
        setModalInfoUser({ show: false, user: { name: "", phone: "" } })
    }

    return (
        <>
            <Row>
                <Col xs={2} sm={2} md={5}>ПАЦІЄНТ</Col>
                <Col xs={5} sm={3} md={3}>ДАТА</Col>
                <Col>ЧАС</Col>
                <Col ></Col>
            </Row>
            {
                Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <>
                            <Row className="my-2">
                                <Col xs={2} sm={2} md={5}>
                                    <span className="md:inline-block hidden">
                                        {"PETRO PETRENKO" + index}
                                    </span>
                                    <span
                                        className="md:hidden inline-block border border-black p-1 hover:bg-blue-400 rounded-xl cursor-pointer" 
                                        onClick={() => handleShowInfoUser({name:`PETRO ${index}`, phone:`${index}${index}`})}
                                    >
                                        <PersonCircle size={20} />
                                    </span>
                                </Col>
                                <Col xs={5} sm={3} md={3}>
                                    Вівт., 18.07.23
                                </Col>
                                <Col>
                                    11:00
                                </Col>
                                <Col className="flex gap-2  items-center">
                                    <CheckSquareFill size={20} className="hover:fill-green-400" />
                                    <XSquareFill size={20} className="hover:fill-red-400" />
                                </Col>
                            </Row>
                        </>
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