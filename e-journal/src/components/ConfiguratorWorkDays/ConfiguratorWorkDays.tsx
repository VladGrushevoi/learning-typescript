import { Button, Col, Row } from "react-bootstrap";
import { useState,  useEffect } from "react";
import { ListWorkHour } from "./ListWorkHour";
import { AddWorkHourForm } from "./AddWorkHourForm";
import { convertDayOfWeekToNameDay } from "../../utils/convertDayOfWeekToNameDay";
import { useAppSelector } from "../../Redux/storehooks";
import { WorkDay, WorkTime, useConfiguratorWorkDay } from "./useConfoguratorWorkDays";
import { appAxios } from "../../appAxios/appAxios";

interface ConfiGuratorWorkDaysProps {

}


export const ConfiGuratorWorkDays = ({}: ConfiGuratorWorkDaysProps) => {
    const userToken = useAppSelector(state => state.user.JwtToken);
    const {workDays, fetchWorkDaysInfo, replaceWorkDay, addWorkTimeToDay, deleteWorkTime} = useConfiguratorWorkDay(userToken)
    const [chooseDayIndex, setDayIndex] = useState(0);
    useEffect(() => {
        fetchWorkDaysInfo()
    }, [])
    const handleChooseDay = (dayIndex: number) => {
        setDayIndex(dayIndex)
    }

    const addWorkTime = async (hour: string, minutes: string) => {
        const validHour = hour.length === 1 ? "0"+hour : hour
        const validMiniutes = minutes.length === 1 ? "0" + minutes : minutes
        const response = await appAxios.post<{workTime: WorkTime}>("/schedule/add-time-to-work-day", {
            time: validHour + ":" + validMiniutes,
            dayOfWeek: workDays![chooseDayIndex].dayOfWeek
        }, {
            headers: {
                Authorization: "Bearer " + userToken
            }
        })

        if(response.status === 200){
            addWorkTimeToDay(workDays![chooseDayIndex].dayOfWeek, response.data.workTime)
        }
    }

    const changeIsWorkDay = async () => {
        const response = await appAxios.patch<{workDay: WorkDay}>("/schedule/set-work-day", {
            workDayId: workDays![chooseDayIndex].id,
            isWorkDay: !workDays![chooseDayIndex].isWorkDay
        }, {
            headers: {
                Authorization: "Bearer " + userToken
            }
        });

        if(response.status === 200){
            replaceWorkDay(response.data.workDay)
        }
    }

    const deleteWorkTimeHandler = async (workTimeId: string) => {
        const response = await appAxios.patch<{httpStatusCode: number}>("/schedule/delete-time", {
            dayOfWeek: workDays![chooseDayIndex].dayOfWeek,
            workTimeId: workTimeId
        },{
            headers: {
                Authorization: "Bearer " + userToken,
            }
        })

        if(response.data.httpStatusCode === 200){
            deleteWorkTime(workDays![chooseDayIndex].dayOfWeek, workTimeId)
        }
    }

    return (
        <>
            <Row className="gap-2">
                {
                    workDays && workDays.map((day, index) => {
                        return (
                            <Col key={Math.random()}>
                                <Button  
                                    onClick={() => handleChooseDay(index)}
                                    className=""
                                    variant={chooseDayIndex !== index ? 'secondary' : 'success'}
                                >
                                    {convertDayOfWeekToNameDay(day.dayOfWeek)}
                                </Button>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                {
                    workDays && 
                    <>
                        <ListWorkHour 
                            workHours={workDays[chooseDayIndex].times} 
                            deleteWorkTime={deleteWorkTimeHandler}
                            />
                        <AddWorkHourForm 
                            isWorkDay={workDays[chooseDayIndex].isWorkDay} 
                            changeIsWorkDay={changeIsWorkDay}
                            addWorkTime={addWorkTime}
                            />
                    </>
                }
            </Row>
        </>
    )
}