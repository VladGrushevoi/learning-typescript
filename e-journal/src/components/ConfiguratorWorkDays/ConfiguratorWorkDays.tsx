import { Col, Row, Tab, Tabs } from "react-bootstrap"
import { PencilSquare } from "react-bootstrap-icons"
import { AddWorkHourForm } from "./AddWorkHourForm"
import { useFakeWorkHour } from "../../fake-data/fake-workHour"

interface ConfiGuratorWorkDaysProps {

}

export const ConfiGuratorWorkDays = ({ }: ConfiGuratorWorkDaysProps) => {

    const {addNewWorkHour, updateExistingWorkHour, workHour} = useFakeWorkHour();

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
                        workHour[0] && workHour[0].map((_, index) => {
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
                    <AddWorkHourForm addNewHour={addNewWorkHour} />
                </Tab>
                <Tab eventKey="Tuesday" title="Вівторок">
                    <AddWorkHourForm  addNewHour={addNewWorkHour}/>
                </Tab>
                <Tab eventKey="Wednesday" title="Середа">
                    <AddWorkHourForm addNewHour={addNewWorkHour} />
                </Tab>
                <Tab eventKey="Thursday" title="Четвер" >
                    <AddWorkHourForm addNewHour={addNewWorkHour} />
                </Tab>
                <Tab eventKey="Friday" title="П'ятниця" >
                    <AddWorkHourForm addNewHour={addNewWorkHour} />
                </Tab>
                <Tab eventKey="Saturday" title="Субота" >
                    <AddWorkHourForm addNewHour={addNewWorkHour} />
                </Tab>
                <Tab eventKey="Sunday" title="Неділя" >
                    <AddWorkHourForm addNewHour={addNewWorkHour} />
                </Tab>
            </Tabs>
        </>
    )
}