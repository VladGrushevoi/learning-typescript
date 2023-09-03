import { Button, Col, Row, Tab } from "react-bootstrap"
import { DayInfoType, Status } from "../../types/dayInfoType"
import { PersonPlusFill, PersonFillSlash } from "react-bootstrap-icons"
import { WorkTime } from "../../types/work-hour"
import { ConvertStatusToString } from "../../utils/convertStatusNumberToString"
import { WriteToWorkTimeModal } from "../modals/WriteToWorkTimeModal"
import { useState } from "react"

interface DayInfoTableProps {
    data: DayInfoType[]
}

interface SelectedWorkTime {
    isShow: boolean,
    date: string,
    dayOfweek: number
    workTime: WorkTime,
}

export const DayInfoTable = ({ data }: DayInfoTableProps) => {
    const [selectWorkTime, setSelectedWorkTime] = useState<SelectedWorkTime>({
        isShow: false,
        date: "",
        dayOfweek: 0,
        workTime: {
            id: 0,
            status: Status.Canceled,
            time: "00:00",
            userId: "",
            userMessage: "" 
        }
    });

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
                data.map(day => {

                    return (
                        <Tab.Pane eventKey={day.dayOfWeek} key={Math.random()} className="gap-4 tracking-widest">
                            <Row key={Math.random()} className="gap-2 m-auto justify-center">
                                <Row className="border-b-2 border-blue-300">
                                    <Col xs={2} sm={2} md={2}>ЧАС</Col>
                                    <Col >СТАТУС</Col>
                                    <Col xs={2} sm={2} md={4}></Col>
                                </Row>
                                {
                                    day.times.map(time => {
                                        return (
                                            <Row key={Math.random()} className={`${typeTimeColor(time)} rounded-md items-center py-2`}>
                                                <Col xs={2} sm={2} md={2} className="m-auto">{time.time.split(' ')[1]}</Col>
                                                <Col className="m-auto">{ConvertStatusToString(time.status)}</Col>
                                                <Col xs={2} sm={2} md={4}>
                                                    <Button
                                                        disabled={isFreeTime(time)}
                                                        className="m-auto tracking-widest"
                                                        onClick={() => setSelectedWorkTime({
                                                            isShow: true,
                                                            date: day.date,
                                                            dayOfweek: day.dayOfWeek,
                                                            workTime: time
                                                        })}
                                                    >
                                                        <span className="md:inline-block hidden">
                                                            {isFreeTime(time) ? "Заброньовано" : "Записатися"}
                                                        </span>
                                                        <span className="inline-block md:hidden">
                                                            {
                                                                isFreeTime(time) ?
                                                                    <PersonFillSlash size={20} />
                                                                    :
                                                                    <PersonPlusFill size={20} />
                                                            }
                                                        </span>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    )
                })
            }
            <WriteToWorkTimeModal
                date={selectWorkTime.date}
                workTime={selectWorkTime.workTime}
                isShow={selectWorkTime.isShow}
                onClose={() => setSelectedWorkTime(prev => {
                    return {
                        ...prev,
                        isShow: false
                    }
                })}
            />
        </>
    )
}