import { Col, Row } from "react-bootstrap"
import { WorkTime } from "../../types/work-hour"
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons"

interface ListWorkHourProps {
    workHours: WorkTime[],
}

export const ListWorkHour = ({ workHours }: ListWorkHourProps) => {

    console.log(workHours, "LIST WORK HOURS")

    return (
        <>
            {
                workHours && workHours.map((item, index) => {
                    return (
                            <Row key={item.id} className="text-center my-2 justify-center items-center">
                                <Col xs={1} sm={1} md={1}>
                                    {index + 1}
                                </Col>
                                <Col>
                                    {item.time.split(" ")[1]}
                                </Col>
                                <Col xs={3} sm={3} md={3} className="flex gap-4">
                                    <PencilSquare size={18} className="hover:fill-orange-500 cursor-pointer" />
                                    <Trash3Fill size={18} className="hover:fill-gray-400 cursor-pointer"/>
                                </Col>
                            </Row>
                    )
                })
            }
        </>
    )
}