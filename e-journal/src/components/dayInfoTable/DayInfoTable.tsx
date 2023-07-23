import { Button, Col, Row, Tab } from "react-bootstrap"
import { DayInfoType, Status, WorkTime } from "../../types/dayInfoType"
import { PersonPlusFill, PersonFillSlash } from "react-bootstrap-icons"

interface DayInfoTableProps {
    data: DayInfoType[]
}

export const DayInfoTable = ({ data }: DayInfoTableProps) => {

    const typeTimeColor = (item: WorkTime) => {
        return `${item.status === Status.Free ? 'bg-green-300'
                : item.status === Status.TemporaryHold ? 'bg-orange-300'
                    : 'bg-red-300'}`
    }

    const isFreeTime = (item: WorkTime): boolean => {
        return item.status !== Status.Free
    }

    return (
        <>
            {
                data.map(item => {

                    return (
                        <>
                            <Tab.Pane eventKey={item.day} key={Math.random()} className="gap-4 tracking-widest">
                                <Row key={Math.random()} className="gap-2 m-auto justify-center">
                                    <Row className="border-b-2 border-blue-300">
                                        <Col xs={2} sm={2} md={2}>ЧАС</Col>
                                        <Col >СТАТУС</Col>
                                        <Col xs={2} sm={2} md={4}></Col>
                                    </Row>
                                {
                                    item.times.map(item => {
                                        return (
                                            <>
                                                <Row key={Math.random()} className={`${typeTimeColor(item)} rounded-md items-center py-2`}>
                                                    <Col xs={2} sm={2} md={2} className="m-auto">{item.time}</Col>
                                                    <Col className="m-auto">{item.status}</Col>
                                                    <Col xs={2} sm={2} md={4}>
                                                        <Button
                                                        disabled={isFreeTime(item)}
                                                        className="m-auto tracking-widest"
                                                        >
                                                            <span className="md:inline-block hidden">
                                                                {isFreeTime(item) ? "Заброньовано" : "Записатися"}
                                                            </span>
                                                            <span className="inline-block md:hidden">
                                                                {
                                                                    isFreeTime(item) ?
                                                                        <PersonFillSlash size={20} />
                                                                        :
                                                                        <PersonPlusFill size={20} />
                                                                }
                                                            </span>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </>
                                        )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                        </>
                    )
                })
            }
        </>
    )
}