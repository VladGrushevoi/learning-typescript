import { Button, Col, Row } from "react-bootstrap";
import { useFakeWorkHour } from "../../fake-data/fake-workHour"
import { useState } from "react";
import { ListWorkHour } from "./ListWorkHour";
import { AddWorkHourForm } from "./AddWorkHourForm";

interface ConfiGuratorWorkDaysProps {

}

const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя",]

export const ConfiGuratorWorkDays = ({ }: ConfiGuratorWorkDaysProps) => {

    const { addNewWorkHour, workHour } = useFakeWorkHour();
    const [chooseDayIndex, setDayIndex] = useState(0);
    const handleChooseDay = (dayIndex: number) => {
        setDayIndex(dayIndex)
    }

    return (
        <>
            <Row className="gap-2">
                {
                    days.map((day, index) => {
                        return (
                            <Col>
                                <Button 
                                    key={index+day} 
                                    onClick={() => handleChooseDay(index)}
                                    className=""
                                    variant={chooseDayIndex !== index ? 'secondary' : 'success'}
                                >
                                    {day}
                                </Button>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                <ListWorkHour dayIndex={chooseDayIndex} workHours={workHour[chooseDayIndex]} />
                <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={chooseDayIndex} />
            </Row>
        </>
    )
}