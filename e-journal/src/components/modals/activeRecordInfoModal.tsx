import { Button, Modal } from "react-bootstrap"
import { ActiveRecord } from "../../types/activeRecords"

interface ActiveRecordModalProps {
    selectedRecord: ActiveRecord,
    onClose: () => void, 
}

export const ActiveRecordInfoModal = ({selectedRecord, onClose} : ActiveRecordModalProps) => {

    return (
        <>
            <Modal show={selectedRecord.workTimeId !== ""} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Детальна інформація про запис</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Ім'я: {selectedRecord.user.firstName + " " + selectedRecord.user.lastName}</p>
                    <p>Номер телефону: {selectedRecord.user.phoneNumber}</p>
                    <p>Коментар: {selectedRecord.userMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}