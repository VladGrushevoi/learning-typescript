import { Col, Row } from "react-bootstrap"
import { ActiveRecordsTable } from "../../record/ActiveRecordTable"
import { ConfiGuratorWorkDays } from "../../ConfiguratorWorkDays/ConfiguratorWorkDays"
import { WorkHour } from "../../../types/work-hour"

interface AdminPageProps {
    days: {name: string, times: WorkHour[]}[],
    addNewHour: (dayIndex: number, newhour: WorkHour) => void, 
}

export const AdminPage = ({ days, addNewHour } : AdminPageProps) => {

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
                    <ConfiGuratorWorkDays days={days} addNewWorkHour={addNewHour}/>
                </Col>
            </Row>
        </>
    )
}