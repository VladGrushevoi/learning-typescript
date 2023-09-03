import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import { WorkTime } from "../../types/work-hour"

interface WriteToworkTimeModalProps {
    date: string,
    workTime: WorkTime,
    isShow: boolean,
    onClose: () => void
}

export const WriteToWorkTimeModal = ({ date, workTime, isShow, onClose }: WriteToworkTimeModalProps) => {

    return (
        <>
            <Modal show={isShow} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Дата: {date}</p>
                    <p>Час: {workTime.time.split(" ")[1]}</p>
                    <p> 
                        <InputGroup>
                        <InputGroup.Text>Комментар</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => console.log("Виконати запис")}>
                        Записатися
                    </Button>
                    <Button variant="primary" onClick={onClose}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}