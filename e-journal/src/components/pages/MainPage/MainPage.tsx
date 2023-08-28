import { useEffect } from 'react'
import { Col, Nav, Row, Stack, Tab } from "react-bootstrap"
import { DateButton } from "../../bottons/DateButton"
import { DayInfoTable } from "../../dayInfoTable/DayInfoTable"
import { useAppDispatch, useAppSelector } from "../../../Redux/storehooks"
import { RootState } from "../../../Redux/store"
import { ActualWeeklyScheduleRsponse } from '../../../Redux/features/WorkDays/PayloadTypes/ActaulWeeklySchedule'
import { appAxios } from '../../../appAxios/appAxios'
import { getActaulWeeklySchedule } from '../../../Redux/features/WorkDays/workDaysSlice'


interface MainPaheProps {
    
}


export const MainPage = ({} : MainPaheProps) => {
    const user = useAppSelector((state: RootState) => state.user);
    console.log(user)
    const dispatch = useAppDispatch();
    useEffect(() => {
        async function fetchActualWeeklySchedule(){
            const response = await appAxios.get<ActualWeeklyScheduleRsponse>("/schedule/actual-schedule", {
                headers: {
                    "Authorization": "Bearer " + user.JwtToken
                }
            })
            console.log(response);
            dispatch(getActaulWeeklySchedule(response.data))
        }
        console.log("ALLLOOOOO")
        fetchActualWeeklySchedule();
    }, [])

    const days = useAppSelector((state: RootState) => state.schedule);
    console.log(days, "from redux")
    return (
        <>
            <Row className=' px-3 py-8 text-center gap-3 md:h-[90vh] h-[150vh]'>
                <Col className='border-2 rounded-2xl border-orange-300 shadow-lg'>
                    <Row className="">
                        <Tab.Container defaultActiveKey={days.workDays[0].dayOfWeek}>
                            <Row className="gap-3 py-3 m-0">
                                <Col  className="border-2 m-auto rounded-md  border-blue-400">
                                    <Nav variant="pills" className="md:flex-col" key={Math.random()}>
                                        <DateButton  
                                        workingDays={days.workDays.map(item => {
                                            return {
                                                eventKey: item.dayOfWeek,
                                                name: item.date,
                                                isWorking: item.isWorkDay
                                            }
                                        })}
                                        />
                                    </Nav>
                                </Col>
                                <Col xs={12} sm={12} md={9} xl={9} className="p-0">
                                    <Tab.Content className="m-0">
                                        <DayInfoTable data={
                                            days.workDays.map(item => {
                                                return {
                                                    name: item.dayOfWeek,
                                                    times: item.times
                                                }
                                            })
                                        }
                                        />
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Col>
                <Col lg={3} className='bg-green-300 rounded-lg'>
                    <Stack gap={2} className="py-4">
                        <h1 className="underline">
                            КОРИСНА ІНФОРМАЦІЯ
                        </h1>
                        <h2 className="text-center border rounded-md border-blue-600 shadow-lg">
                            ПРИХОДЬТЕ ЗІ СВОЇМИ СЕРВЕТКАМИ
                        </h2>
                        <h2 className="border rounded-md border-blue-600 shadow-lg">
                            ПРИХОДЬТЕ ЗІ СВОЇМИ СЕРВЕТКАМИ
                        </h2>
                        <h2 className="border rounded-md border-blue-600 shadow-lg">
                            ПРИХОДЬТЕ ЗІ СВОЇМИ СЕРВЕТКАМИ
                        </h2>
                    </Stack>
                </Col>
            </Row>
        </>
    )
}