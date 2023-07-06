import { Button, Col, Row, Stack, Tab } from "react-bootstrap"
import { DayInfoType, Status, WorkTime } from "../../types/dayInfoType"

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
        return item.status === Status.Free
    }

    return (
        <>
            {
                data.map(item => {

                    return (
                        <>
                            <Tab.Pane eventKey={item.day} key={Math.random()} >
                                <Stack gap={2} direction="vertical" className="w-[100%]">
                                    {
                                        item.times.map(item => {
                                            return (
                                                <>
                                                    <Row className={`mt-2 ${typeTimeColor(item)} w-[100%]`}>
                                                        <Col xs={2}>{item.time}</Col>
                                                        <Col  className="text-center">{item.status}</Col>
                                                        <Col xs={4}>
                                                            <Button
                                                            disabled={isFreeTime(item)}
                                                            className="m-1"
                                                            >
                                                                Записатися
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </>
                                            )
                                        })
                                    }
                                </Stack>
                            </Tab.Pane>
                        </>
                    )
                })
            }
        </>
    )
}