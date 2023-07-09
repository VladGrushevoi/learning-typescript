import { Col, Nav, Row, Tab } from "react-bootstrap"
import { WorkDays } from "../../../fake-data/work-days"
import { DateButton } from "../../bottons/DateButton"
import { DayInfoTable } from "../../dayInfoTable/DayInfoTable"

export const MainPage = () => {

    return (
        <>
            <Row className=' px-6 py-8 text-center gap-3 h-[90vh]'>
                <Col className='border-2 rounded-2xl border-orange-300 shadow-lg'>
                    <Row className="">
                        <Tab.Container defaultActiveKey={WorkDays.filter(item => item.times.length !== 0)[0].day}>
                            <Row className="gap-3 py-4 m-0">
                                <Col  className="border-2 m-auto rounded-md  border-blue-400">
                                    <Nav variant="pills" className="md:flex-col" key={Math.random()}>
                                        <DateButton  days={WorkDays}/>
                                    </Nav>
                                </Col>
                                <Col xs={12} sm={12} md={9} xl={9} className="pr-0 m-auto">
                                    <Tab.Content className="mr-0">
                                        <DayInfoTable data={WorkDays}/>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Col>
                <Col lg={3} className='bg-green-300 rounded-lg'>
                </Col>
            </Row>
        </>
    )
}