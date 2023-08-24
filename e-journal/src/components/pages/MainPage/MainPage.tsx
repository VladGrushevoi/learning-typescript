import { Col, Nav, Row, Stack, Tab } from "react-bootstrap"
import { DateButton } from "../../bottons/DateButton"
import { DayInfoTable } from "../../dayInfoTable/DayInfoTable"
import { WorkHour } from "../../../types/work-hour"


interface MainPaheProps {
    days: {
        name: string, 
        isWorkingDay: boolean, 
        times: WorkHour[]
    }[]
}


export const MainPage = ({days} : MainPaheProps) => {

    return (
        <>
            <Row className=' px-3 py-8 text-center gap-3 md:h-[90vh] h-[150vh]'>
                <Col className='border-2 rounded-2xl border-orange-300 shadow-lg'>
                    <Row className="">
                        <Tab.Container defaultActiveKey={days[1].name}>
                            <Row className="gap-3 py-3 m-0">
                                <Col  className="border-2 m-auto rounded-md  border-blue-400">
                                    <Nav variant="pills" className="md:flex-col" key={Math.random()}>
                                        <DateButton  
                                        workingDays={days.map(item => {
                                            return {
                                                name: item.name,
                                                isWorking: item.isWorkingDay
                                            }
                                        })}
                                        />
                                    </Nav>
                                </Col>
                                <Col xs={12} sm={12} md={9} xl={9} className="p-0">
                                    <Tab.Content className="m-0">
                                        <DayInfoTable data={
                                            days.map(item => {
                                                return {
                                                    name: item.name,
                                                    times: item.times
                                                }
                                            })
                                        }
                                        />
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Col>
                <Col lg={3} className='bg-green-300 rounded-lg'>
                    <Stack gap={2} className="py-4">
                        <h1 className="underline">
                            КОРИСНА ІНФОРМАЦІЯ
                        </h1>
                        <h2 className="text-center border rounded-md border-blue-600 shadow-lg">
                            ПРИХОДЬТЕ ЗІ СВОЇМИ СЕРВЕТКАМИ
                        </h2>
                        <h2 className="border rounded-md border-blue-600 shadow-lg">
                            ПРИХОДЬТЕ ЗІ СВОЇМИ СЕРВЕТКАМИ
                        </h2>
                        <h2 className="border rounded-md border-blue-600 shadow-lg">
                            ПРИХОДЬТЕ ЗІ СВОЇМИ СЕРВЕТКАМИ
                        </h2>
                    </Stack>
                </Col>
            </Row>
        </>
    )
}