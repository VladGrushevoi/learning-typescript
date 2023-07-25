import { Button, Col, Form, InputGroup } from "react-bootstrap"
import { CheckSquareFill, PlusCircle, XSquareFill } from "react-bootstrap-icons"

interface AddWorkHourFormProps {

}

export const AddWorkHourForm = ({ }: AddWorkHourFormProps) => {

    return (
        <>
            <Form className="justify-center items-center">
                <Form.Check label="Робочий день" checked />
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">ЧАС</InputGroup.Text>
                    <Form.Control
                        placeholder="Година на прийом"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <Button className="bg-transparent px-1 py-0 border-0">
                        <CheckSquareFill className="hover:fill-green-600" size={40} />
                    </Button>
                    <Button className="bg-transparent px-1 py-0 border-0">
                        <XSquareFill className="hover:fill-red-600" size={40} />
                    </Button>
                </InputGroup>
                <Col className="text-center">
                    <Button type="submit" className="">
                        <PlusCircle />
                    </Button>
                </Col>
            </Form>
        </>
    )
}