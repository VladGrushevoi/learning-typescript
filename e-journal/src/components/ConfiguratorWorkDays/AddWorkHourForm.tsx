import { Button, Col, Form, InputGroup } from "react-bootstrap"
import { CheckSquareFill, PlusCircle, XSquareFill } from "react-bootstrap-icons"
import { WorkTime } from "../../types/work-hour"
import { useInput } from "../../hooks/useInput"
import { useCheckbox } from "../../hooks/useCheckbox"
import { Status } from "../../types/dayInfoType"

interface AddWorkHourFormProps {
    addNewHour: (index: number, newHourData: WorkTime) => void,
    dayIndex: number
}

export const AddWorkHourForm = ({ addNewHour, dayIndex }: AddWorkHourFormProps) => {

    const timeInput = useInput("", "time");
    const minutesInput = useInput("", "minutes");
    const isWorkDay = useCheckbox(false, "isWorkDayChkBx");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newWorkHour : WorkTime = {
            id: Math.random(),
            time: timeInput.value + ":" + minutesInput.value,
            status: Status.Free,
            userId: null
        }

        addNewHour(dayIndex,newWorkHour)
    }

    return (
        <>
            <Form className="justify-center items-center" onSubmit={handleSubmit}>
                <Form.Check label="Робочий день" {...isWorkDay} />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">ЧАС</InputGroup.Text>
                    <Form.Control
                        placeholder="Година на прийом"
                        aria-label="Time"
                        aria-describedby="basic-addon1"
                        {...timeInput}
                    />
                    <InputGroup.Text id="basic-addon1">:</InputGroup.Text>
                    <Form.Control
                        placeholder="Хвилини"
                        aria-label="Minutes"
                        aria-describedby="basic-addon1"
                        {...minutesInput}
                    />
                    <Button type="submit" className="bg-transparent px-1 py-0 border-0">
                        <CheckSquareFill className="hover:fill-green-600" size={40} />
                    </Button>
                    <Button className="bg-transparent px-1 py-0 border-0">
                        <XSquareFill className="hover:fill-red-600" size={40} />
                    </Button>
                </InputGroup>
                <Col className="text-center">
                    <Button className="">
                        <PlusCircle />
                    </Button>
                </Col>
            </Form>
        </>
    )
}