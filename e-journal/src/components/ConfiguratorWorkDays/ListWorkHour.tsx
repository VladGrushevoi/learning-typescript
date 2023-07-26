import { Col, Row } from "react-bootstrap"
import { WorkHour } from "../../types/work-hour"
import { PencilSquare } from "react-bootstrap-icons"

interface ListWorkHourProps {
    workHours: WorkHour[],
    dayIndex: number
}

export const ListWorkHour = ({ workHours }: ListWorkHourProps) => {

    return (
        <>
            {
                workHours && workHours.map((item, index) => {
                    return (
                        <>
                            <Row key={Math.random()} className="text-center my-2 justify-center items-center">
                                <Col xs={1} sm={1} md={1}>
                                    {index + 1}
                                </Col>
                                <Col>
                                    {item.hour}
                                </Col>
                                <Col xs={2} sm={2} md={2}>
                                    <PencilSquare size={18} className="hover:fill-orange-500 cursor-pointer" />
                                </Col>
                            </Row>
                        </>
                    )
                })
            }
        </>
    )
}