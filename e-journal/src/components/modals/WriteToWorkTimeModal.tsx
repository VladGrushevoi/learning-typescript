import { Button, Col, Form, InputGroup, Modal, Row, Spinner } from "react-bootstrap"
import { WorkTime } from "../../types/work-hour"
import { convertDayOfWeekToNameDay } from "../../utils/convertDayOfWeekToNameDay"
import { useInput } from "../../hooks/useInput"
import { useState } from "react"

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
    const [isLoading, setLoading] = useState<boolean>(false)
    const handleWrite = () => {
        setLoading(true)
        createUserRocordToWorkTime(messageInput.value)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }

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
                    {
                        isLoading ?
                            <>
                                <Spinner animation="grow" variant="success" />
                            </>
                            :
                            <>
                                <Button variant="secondary" onClick={handleWrite}>
                                    Записатися
                                </Button>
                            </>
                    }
                    <Button variant="primary" onClick={onClose}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}