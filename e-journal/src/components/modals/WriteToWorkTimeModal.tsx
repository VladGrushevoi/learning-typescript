import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap"
import { WorkTime } from "../../types/work-hour"
import { convertDayOfWeekToNameDay } from "../../utils/convertDayOfWeekToNameDay"
import { useInput } from "../../hooks/useInput"

interface WriteToworkTimeModalProps {
    date: string,
    dayOfWeek: number,
    workTime: WorkTime,
    isShow: boolean,
    onClose: () => void
    createUserRocordToWorkTime: (message: string) => void,
}

export const WriteToWorkTimeModal = ({ date, workTime, isShow, dayOfWeek, onClose, createUserRocordToWorkTime }: WriteToworkTimeModalProps) => {
    const messageInput = useInput("", "message")
    return (
        <>
            <Modal show={isShow} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Запис на прийом</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-2xl text-left">
                    <Row className="my-2">
                        <Col md={3} className="uppercase font-bold tracking-widest text-slate-700">
                            Дата:
                        </Col>
                        <Col>
                            {date}
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col md={3} className="uppercase font-bold tracking-widest text-slate-700">
                            Час:
                        </Col>
                        <Col>
                            {
                                convertDayOfWeekToNameDay(dayOfWeek) +
                                ", " +
                                workTime.time.split(" ")[1]
                            }
                        </Col>
                    </Row>
                    <p>
                        <InputGroup>
                            <InputGroup.Text>Комментар</InputGroup.Text>
                            <Form.Control {...messageInput} as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => createUserRocordToWorkTime(messageInput.value)}>
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