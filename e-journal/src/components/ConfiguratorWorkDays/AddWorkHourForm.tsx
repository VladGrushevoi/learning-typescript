import { Button, Col, Form, InputGroup } from "react-bootstrap"
import { CheckSquareFill, PlusCircle, XSquareFill } from "react-bootstrap-icons"
import { useInput } from "../../hooks/useInput"
//import { useCheckbox } from "../../hooks/useCheckbox";

interface AddWorkHourFormProps {
    isWorkDay: boolean,
    changeIsWorkDay: () => void,
    addWorkTime: (hour: string, minutes: string) => void,
}

export const AddWorkHourForm = ({ isWorkDay, changeIsWorkDay, addWorkTime }: AddWorkHourFormProps) => {

    const timeInput = useInput("", "time");
    const minutesInput = useInput("", "minutes");

    const handleIsWorkDayCheck = () => {
        changeIsWorkDay()
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(timeInput.value !== '' && minutesInput.value !== ''){
            addWorkTime(timeInput.value, minutesInput.value)
        }
    }

    return (
        <>
            <Form.Check className="ml-3" label="Робочий день" checked={isWorkDay} onClick={handleIsWorkDayCheck} />
            {
                isWorkDay && 
                <Form className="justify-center items-center" onSubmit={handleSubmit}>
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
            }
        </>
    )
}