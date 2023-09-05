import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { ChatLeftText, CheckSquareFill, PersonCircle, XSquareFill } from "react-bootstrap-icons"
import { useAppSelector } from "../../Redux/storehooks"
import { useActiveRecords } from "./useActiveRecords"
import { convertDayOfWeekToNameDay } from "../../utils/convertDayOfWeekToNameDay"
import { ActiveRecord } from "../../types/activeRecords"
import { ActiveRecordInfoModal } from "../modals/activeRecordInfoModal"

interface ActiveRecordsTableProps {

}

export const ActiveRecordsTable = ({  } : ActiveRecordsTableProps) => {
    const userToken = useAppSelector(state => state.user.JwtToken);
    const {activeRecords, fetchActiveRecords} = useActiveRecords(userToken);

    useEffect(() => {
        fetchActiveRecords();
    }, [])
    const [selectedRecord, setSelectedRecord] = useState<ActiveRecord>(activeRecords[0])
    console.log(selectedRecord)
    const handleShowInfoUser = (record: ActiveRecord) => {
        setSelectedRecord(record)
    }

    const closeModalInfoUser = () => {
        setSelectedRecord({
            date: "",
            time: "",
            dayOfWeek: 0,
            userMessage:"",
            workTimeId:"",
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
                <Col xs={2} sm={2} md={5}>ПАЦІЄНТ</Col>
                <Col xs={5} sm={3} md={3}>ДАТА</Col>
                <Col>ЧАС</Col>
                <Col ></Col>
            </Row>
            {
                activeRecords.map((rec, index) => {
                    return (
                            <Row key={index+index*2} className="my-2 text-center justify-center items-center">
                                <Col xs={2} sm={2} md={5}>
                                    <Col md={10} className="md:inline-block hidden">
                                        <Row md={8} className="justify-center items-center">
                                            <Col md={10}>
                                                <Row>{`${index + 1} ${rec.user.firstName + " " + rec.user.lastName}`}</Row>
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
                                <Col xs={5} sm={3} md={3}>
                                    {
                                        convertDayOfWeekToNameDay(rec.dayOfWeek)
                                        + ", " + 
                                        rec.date
                                    }
                                </Col>
                                <Col>
                                    {rec.time.split(" ")[1]}
                                </Col>
                                <Col className="flex gap-2  items-center">
                                    <CheckSquareFill size={20} className="hover:fill-green-400" />
                                    <XSquareFill size={20} className="hover:fill-red-400" />
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