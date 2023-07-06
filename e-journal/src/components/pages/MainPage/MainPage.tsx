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
                                <Col  className="border m-auto rounded-md ">
                                    <Nav variant="" className="md:flex-col" key={Math.random()}>
                                        <DateButton  days={WorkDays}/>
                                    </Nav>
                                </Col>
                                <Col xs={10} sm={9} md={9} xl={9} className="pr-0">
                                    <Tab.Content>
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