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
                            <Row className="gap-3 px-4 py-4 m-0 w-[80%]">
                                <Col  className="">
                                    <Nav variant="pills" className="flex items-center" key={Math.random()}>
                                        <DateButton  days={WorkDays}/>
                                    </Nav>
                                </Col>
                                <Col sm={9} xs={10} md={10} lg={10} xl={10} xxl={10} className="">
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