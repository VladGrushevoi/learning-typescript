import { Button, Col, Form, InputGroup, Row, Tab, Tabs } from "react-bootstrap"
import { CheckSquareFill, PencilSquare, PlusCircle, XSquareFill } from "react-bootstrap-icons"

interface ConfiGuratorWorkDaysProps {

}

export const ConfiGuratorWorkDays = ({ }: ConfiGuratorWorkDaysProps) => {

    return (
        <>
            <Tabs
                defaultActiveKey="Monday"
                id="justify-tab-example"
                className="mb-3 border-b-2 border-black"
                justify
            >
                <Tab
                    eventKey="Monday"
                    title="Понеділок"
                    className="px-4 text-lg"
                >
                    {
                        Array.from({length:5}).map((_, index) => {
                            return (
                                <>
                                    <Row key={Math.random()} className="text-center my-2 justify-center items-center">
                                        <Col xs={1} sm={1} md={1}>
                                            {index + 1}
                                        </Col>
                                        <Col>
                                            {"11:00"}
                                        </Col>
                                        <Col xs={2} sm={2} md={2}>
                                            <PencilSquare size={18} className="hover:fill-orange-500 cursor-pointer" />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                    <Form className="justify-center items-center">
                        <Form.Check label="Робочий день" />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">ЧАС</InputGroup.Text>
                            <Form.Control
                                placeholder="Година на прийом"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <Button className="bg-transparent px-1 py-0 border-0">
                                <CheckSquareFill className="hover:fill-green-600" size={40}/>
                            </Button>
                            <Button className="bg-transparent px-1 py-0 border-0">
                                <XSquareFill className="hover:fill-red-600" size={40} />
                            </Button>
                        </InputGroup>
                        <Button type="submit" className="">
                            <PlusCircle />
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="Tuesday" title="Вівторок">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="Wednesday" title="Середа">
                    Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="Thursday" title="Четвер" >
                    Tab content for Contact
                </Tab>
                <Tab eventKey="Friday" title="П'ятниця" >
                    Tab content for Contact
                </Tab>
                <Tab eventKey="Saturday" title="Субота" >
                    Tab content for Contact
                </Tab>
                <Tab eventKey="Sunday" title="Неділя" >
                    Tab content for Contact
                </Tab>
            </Tabs>
        </>
    )
}