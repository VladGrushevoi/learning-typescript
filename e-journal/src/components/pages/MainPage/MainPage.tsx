import { Col, Nav, Row, Tab } from "react-bootstrap"
import { WorkDays } from "../../../fake-data/work-days"
import { DateButton } from "../../bottons/DateButton"
import { DayInfoTable } from "../../dayInfoTable/DayInfoTable"

export const MainPage = () => {

    return (
        <>
            <Row className=' px-6 py-8 text-center gap-3 h-[80vh]'>
                <Col className='border-2 rounded-2xl border-orange-300 shadow-lg'>
                    <Row className="">
                        <Tab.Container defaultActiveKey={WorkDays.filter(item => item.times.length !== 0)[0].day}>
                            <Row className="gap-4 px-4">
                                <Col sm={2} md={2}>
                                    <Nav variant="pills" className="flex items-center" key={Math.random()}>
                                        <DateButton  days={WorkDays}/>
                                    </Nav>
                                </Col>
                                <Col sm={9} className="">
                                    <Tab.Content>
                                        <DayInfoTable data={WorkDays}/>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Col>
                <Col lg={2} className='bg-green-300 rounded-lg h-[20vh]'>
                </Col>
            </Row>
        </>
    )
}