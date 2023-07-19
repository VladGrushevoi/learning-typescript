import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

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
            {
                Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <>
                            <p>User {index + 1} <Button onClick={() => handleShowInfoUser({ name: "Allo yopta" + index, phone: "34234243444323" })}>Info</Button></p>
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