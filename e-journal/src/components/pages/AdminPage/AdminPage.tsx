import { Col, Row } from "react-bootstrap"
import { ActiveRecordsTable } from "../../record/ActiveRecordTable"
import { ConfiGuratorWorkDays } from "../../ConfiguratorWorkDays/ConfiguratorWorkDays"
import { useAppSelector } from "../../../Redux/storehooks"
import { RootState } from "../../../Redux/store"

interface AdminPageProps {
    //days: {name: string, times: WorkTime[]}[],
    //addNewHour: (dayIndex: number, newhour: WorkTime) => void, 
}

export const AdminPage = ({ } : AdminPageProps) => {
    const days = useAppSelector((state: RootState) => state.schedule);
    console.log(days, "ADMIN PAGE")

    return (
        <>
            <Row className=" gap-4 py-4 justify-center px-2">
                <Col sm={12} md={12} lg={6}  className="border border-black text-left rounded-lg">
                    <h1 className="text-center">АКТИВНІ ЗАПИСИ</h1>
                    <ActiveRecordsTable />
                </Col>
                <Col sm={12} md={12} lg={5} className="border border-black rounded-lg">
                    <h1 className="text-center">НАЛАШТУВАННЯ РОБОЧОГО ДНЯ</h1>
                    <ConfiGuratorWorkDays days={days.workDays} addNewWorkHour={() => console.log("Add new hour")}/>
                </Col>
            </Row>
        </>
    )
}