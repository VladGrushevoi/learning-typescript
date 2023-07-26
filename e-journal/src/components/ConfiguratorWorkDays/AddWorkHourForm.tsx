import { Button, Col, Form, InputGroup } from "react-bootstrap"
import { CheckSquareFill, PlusCircle, XSquareFill } from "react-bootstrap-icons"
import { WorkHour } from "../../types/work-hour"
import { useInput } from "../../hooks/useInput"

interface AddWorkHourFormProps {
    addNewHour: (index: number, newHourData: WorkHour) => void
}

export const AddWorkHourForm = ({ addNewHour }: AddWorkHourFormProps) => {

    const timeInput = useInput("", "time");
    const minutesInput = useInput("", "minutes");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newWorkHour : WorkHour = {
            id: Math.random(),
            hour: timeInput.value + ":" + minutesInput.value
        }

        addNewHour(0,newWorkHour)
    }

    return (
        <>
            <Form className="justify-center items-center" onSubmit={handleSubmit}>
                <Form.Check label="Робочий день" checked />
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