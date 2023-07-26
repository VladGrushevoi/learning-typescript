import { Tab, Tabs } from "react-bootstrap"
import { AddWorkHourForm } from "./AddWorkHourForm"
import { useFakeWorkHour } from "../../fake-data/fake-workHour"
import { ListWorkHour } from "./ListWorkHour"

interface ConfiGuratorWorkDaysProps {

}

export const ConfiGuratorWorkDays = ({ }: ConfiGuratorWorkDaysProps) => {

    const { addNewWorkHour, workHour } = useFakeWorkHour();

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
                    <ListWorkHour workHours={workHour[0]} dayIndex={0} />
                    <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={1} />
                </Tab>
                <Tab eventKey="Wednesday" title="Середа">
                    <ListWorkHour workHours={workHour[2]} dayIndex={2} />
                    <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={2} />
                </Tab>
                <Tab eventKey="Thursday" title="Четвер" >
                    <ListWorkHour workHours={workHour[3]} dayIndex={3} />
                    <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={3} />
                </Tab>
                <Tab eventKey="Friday" title="П'ятниця" >
                    <ListWorkHour workHours={workHour[4]} dayIndex={4} />
                    <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={4} />
                </Tab>
                <Tab eventKey="Saturday" title="Субота" >
                    <ListWorkHour workHours={workHour[5]} dayIndex={5} />
                    <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={5} />
                </Tab>
                <Tab eventKey="Sunday" title="Неділя" >
                    <ListWorkHour workHours={workHour[6]} dayIndex={6} />
                    <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={6} />
                </Tab>
            </Tabs>
        </>
    )
}