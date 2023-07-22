import { Col, Row } from "react-bootstrap"
import { ActiveRecordsTable } from "../../record/ActiveRecordTable"
import { ConfiGuratorWorkDays } from "../../ConfiguratorWorkDays/ConfiguratorWorkDays"

interface AdminPageProps {

}

export const AdminPage = ({} : AdminPageProps) => {

    return (
        <>
            <Row className="md:h-[90vh] gap-4 py-4 justify-center h-[150vh] px-2">
                <Col sm={12} md={12} lg={6}  className="border border-black text-left rounded-lg">
                    <h1 className="text-center">АКТИВНІ ЗАПИСИ</h1>
                    <ActiveRecordsTable />
                </Col>
                <Col sm={12} md={12} lg={5} className="border border-black rounded-lg">
                    <h1 className="text-center">НАЛАШТУВАННЯ РОБОЧОГО ДНЯ</h1>
                    <ConfiGuratorWorkDays />
                </Col>
            </Row>
        </>
    )
}