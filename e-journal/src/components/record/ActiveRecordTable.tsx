import { useState, useEffect } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import { ChatLeftText, CheckSquareFill, PersonCircle, XSquareFill } from "react-bootstrap-icons"
import { useAppSelector } from "../../Redux/storehooks"
import { useActiveRecords } from "./useActiveRecords"
import { convertDayOfWeekToNameDay } from "../../utils/convertDayOfWeekToNameDay"
import { ActiveRecord } from "../../types/activeRecords"
import { ActiveRecordInfoModal } from "../modals/activeRecordInfoModal"
import { Status } from "../../types/dayInfoType"

interface ActiveRecordsTableProps {

}

export const ActiveRecordsTable = ({ }: ActiveRecordsTableProps) => {
    const userToken = useAppSelector(state => state.user.JwtToken);
    const { activeRecords, fetchActiveRecords, updateRecordStatus } = useActiveRecords(userToken);
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        fetchActiveRecords();
    }, [])
    const [selectedRecord, setSelectedRecord] = useState<ActiveRecord>(activeRecords[0])

    const handleShowInfoUser = (record: ActiveRecord) => {
        setSelectedRecord(record)
    }

    const confirmHandler = (data: { dayofWeek: number, status: Status, workTimeId: string }) => {
        setLoading(prev => !prev)
        updateRecordStatus(data)
        setTimeout(() => {
            setLoading(prev => !prev)
        }, 1000)
    }

    const declineHandler = (data: { dayofWeek: number, status: Status, workTimeId: string }) => {
        setLoading(prev => !prev)
        updateRecordStatus(data)
        setTimeout(() => {
            setLoading(prev => !prev)
        }, 1000)
    }

    const closeModalInfoUser = () => {
        setSelectedRecord({
            date: "",
            time: "",
            dayOfWeek: 0,
            userMessage: "",
            workTimeId: "",
            user: {
                firstName: "",
                lastName: "",
                phoneNumber: "",
                userId: "",
            }
        })
    }

    return (
        <>
            <Row className="text-center">
                <Col xs={1} sm={1} md={1}>#</Col>
                <Col xs={2} sm={4} md={4}>ПАЦІЄНТ</Col>
                <Col xs={4} sm={3} md={3}>ДАТА</Col>
                <Col xs={2} sm={1} md={1}>ЧАС</Col>
                <Col md={3}></Col>
            </Row>
            {
                activeRecords.map((rec, index) => {
                    return (
                        <Row key={index + index * 2} className="my-2 text-center justify-center items-center">
                            <Col xs={1} sm={1} md={1}>{index + 1}</Col>
                            <Col xs={2} sm={4} md={4}>
                                <Col md={10} className="md:inline-block hidden">
                                    <Row md={8} className="justify-center items-center">
                                        <Col md={10}>
                                            <Row>{`${rec.user.firstName + " " + rec.user.lastName}`}</Row>
                                            <Row>{rec.user.phoneNumber}</Row>
                                        </Col>
                                        <Col
                                            className="md:inline-block hidden p-1 rounded-xl cursor-pointer"
                                            onClick={() => handleShowInfoUser(rec)}
                                        >
                                            <ChatLeftText className="hover:fill-blue-400" size={20} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    className="md:hidden inline-block border border-black p-1 hover:bg-blue-400 rounded-xl cursor-pointer"
                                    onClick={() => handleShowInfoUser(rec)}
                                >
                                    <PersonCircle size={20} />
                                </Col>
                            </Col>
                            <Col xs={4} sm={3} md={3}>
                                {
                                    convertDayOfWeekToNameDay(rec.dayOfWeek)
                                    + ", " +
                                    rec.date
                                }
                            </Col>
                            <Col xs={2} sm={1} md={1}>
                                {rec.time.split(" ")[1]}
                            </Col>
                            <Col xs={3} sm={3} md={3} className="flex gap-2 items-center justify-center">
                                {
                                    isLoading ?
                                        <>
                                            <Spinner animation="grow" variant="error"/>
                                        </>
                                        :
                                        <>
                                            <CheckSquareFill
                                                size={20}
                                                onClick={
                                                    () => confirmHandler({
                                                        dayofWeek: rec.dayOfWeek,
                                                        status: Status.Reserv,
                                                        workTimeId: rec.workTimeId
                                                    })
                                                }
                                                className="hover:fill-green-400" />

                                            <XSquareFill
                                                size={20}
                                                onClick={
                                                    () => declineHandler({
                                                        dayofWeek: rec.dayOfWeek,
                                                        status: Status.Free,
                                                        workTimeId: rec.workTimeId
                                                    })
                                                }
                                                className="hover:fill-red-400" />
                                        </>
                                }
                            </Col>
                        </Row>
                    )
                })
            }
            <ActiveRecordInfoModal
                selectedRecord={selectedRecord}
                onClose={closeModalInfoUser}
            />
        </>
    )
}