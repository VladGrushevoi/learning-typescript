import { Tab, Tabs } from "react-bootstrap"

interface ConfiGuratorWorkDaysProps {

}

export const ConfiGuratorWorkDays = ({ }: ConfiGuratorWorkDaysProps) => {

    return (
        <>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3 border-b-2 border-black"
                justify
            >
                <Tab 
                    eventKey="Monday" 
                    title="Понеділок"
                    className=""
                >
                    Tab content for MONDAY
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