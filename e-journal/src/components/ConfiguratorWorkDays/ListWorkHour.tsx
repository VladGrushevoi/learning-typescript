import { Button, Col, Row } from "react-bootstrap"
import { WorkTime } from "./useConfoguratorWorkDays"
import { Trash3Fill } from "react-bootstrap-icons"

interface ListWorkHourProps {
    workHours: WorkTime[],
    deleteWorkTime: (workTimeId: string) => void,
}

export const ListWorkHour = ({ workHours, deleteWorkTime }: ListWorkHourProps) => {

    console.log(workHours, "LIST WORK HOURS")

    const handleClick = (workTimeId : string) => {
        deleteWorkTime(workTimeId)
    }

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
                                <Button variant="danger" size="sm" className="p-1" onClick={() => handleClick(item.id)}>
                                    <span>Видалити</span>
                                    <Trash3Fill size={15} className="hover:fill-gray-400 cursor-pointer inline-block ml-2 m-0" />
                                </Button>
                            </Col>
                        </Row>
                    )
                })
            }
        </>
    )
}