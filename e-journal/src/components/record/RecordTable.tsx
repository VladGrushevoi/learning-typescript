import { Col, Row } from "react-bootstrap"
import { Record } from "../../types/User"
import { TablePagination } from "./TablePagination"
import { useState } from "react"
import { Status } from "../../types/dayInfoType"
import { PersonDash, PersonFillCheck, PersonFillExclamation, PersonLock } from "react-bootstrap-icons"

interface RecordTableProps {
    records: Record[]
}

export const Recordtable = ({ records }: RecordTableProps) => {
    const row = 5;
    const amountPage = Math.ceil(records.length / row)
    const [offSet, setOffset] = useState(0);

    const changeOffset = (newOffset: number) => {
        if (newOffset <= 0) {
            setOffset(0)
            return
        }
        else if (newOffset >= amountPage - 1) {
            setOffset(amountPage - 1)
            return
        } else {
            setOffset(newOffset)
        }
    }

    const getColorFromStatus = (status: Status) => {
        switch (status) {
            case Status.Done:
                return "bg-green-500";
            case Status.Free:
                return "bg-blue-400";
            case Status.Reserv:
                return "bg-yellow-600";
            case Status.TemporaryHold:
                return "bg-orange-400";
        }
    }

    const getIconFromStatus = (status: Status) => {
        switch (status) {
            case Status.Done:
                return <PersonFillCheck size={25} />
            case Status.Free:
                return <PersonDash size={25} />;
            case Status.Reserv:
                return <PersonFillExclamation size={25} />;
            case Status.TemporaryHold:
                return <PersonLock size={25} />;
        }
    }

    return (
        <>
            <Row className="pt-6 justify-center gap-2 px-1">
                <Row className="font-bold text-center tracking-widest text-xl border-b-2 border-blue-400">
                    <Col xs={1} sm={1} md={1} lg={1}>#</Col>
                    <Col xs={4} sm={4} md={2} lg={2}>ЧАС</Col>
                    <Col xs={4} sm={4} md={4} lg={4}>ДАТА</Col>
                    <Col xs={2} sm={2} md={5} lg={5}>СТАТУС</Col>
                </Row>

                {
                    records && records.slice(offSet * row, (offSet * row) + row).map((item, index) => {

                        return (
                            <>
                                <Row key={Math.random()} className={`text-center 
                                                py-1 
                                                tracking-widest 
                                                border-2 
                                                rounded-lg
                                                ${getColorFromStatus(item.status)}
                                                `}>
                                    <Col xs={1} sm={1} md={1} lg={1}>{offSet * row + index + 1}</Col>
                                    <Col xs={4} sm={4} md={2} lg={2}>{item.time}</Col>
                                    <Col xs={5} sm={5} md={4} lg={4}>{item.date}</Col>
                                    <Col xs={2} sm={2} md={5} lg={5}
                                        className=""
                                    >
                                        <span className="md:inline-block hidden">
                                            {item.status}
                                        </span>
                                        <span className="md:hidden inline-block">
                                            {getIconFromStatus(item.status)}
                                        </span>
                                    </Col>
                                </Row>
                            </>
                        )
                    })
                }
            </Row>
            <TablePagination
                amountPage={amountPage}
                setOffset={changeOffset}
                activePage={offSet}
            />
        </>
    )
}