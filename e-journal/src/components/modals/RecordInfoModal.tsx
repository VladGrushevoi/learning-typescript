import { Button, Modal } from "react-bootstrap"
import { WorkTime } from "../../types/work-hour"
import { User } from "../../types/User"

interface RecordInfoModalProps {
    recordInfo: WorkTime,
    isShowModal: boolean,
    user: User,
    onClose: () => void;
}

export const RecordInfoModal = ({isShowModal, recordInfo, user, onClose} : RecordInfoModalProps) => {

    return (
        <>
            <Modal show={isShowModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>NAME: {user.firstName}</p>
                    <p>PHONE: {user.phoneNumber}</p>
                    <p>COMMNENT: {recordInfo.userMessage}</p>
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