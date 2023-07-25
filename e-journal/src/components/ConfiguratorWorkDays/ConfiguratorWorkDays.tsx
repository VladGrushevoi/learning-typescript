import { Col, Row, Tab, Tabs } from "react-bootstrap"
import { PencilSquare } from "react-bootstrap-icons"
import { AddWorkHourForm } from "./AddWorkHourForm"

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
                        Array.from({ length: 5 }).map((_, index) => {
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
                    <AddWorkHourForm />
                </Tab>
                <Tab eventKey="Tuesday" title="Вівторок">
                    <AddWorkHourForm />
                </Tab>
                <Tab eventKey="Wednesday" title="Середа">
                    <AddWorkHourForm />
                </Tab>
                <Tab eventKey="Thursday" title="Четвер" >
                    <AddWorkHourForm />
                </Tab>
                <Tab eventKey="Friday" title="П'ятниця" >
                    <AddWorkHourForm />
                </Tab>
                <Tab eventKey="Saturday" title="Субота" >
                    <AddWorkHourForm />
                </Tab>
                <Tab eventKey="Sunday" title="Неділя" >
                    <AddWorkHourForm />
                </Tab>
            </Tabs>
        </>
    )
}