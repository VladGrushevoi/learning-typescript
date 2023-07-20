import { Col, Row } from "react-bootstrap"
import { ActiveRecordsTable } from "../../record/ActiveRecordTable"

interface AdminPageProps {

}

export const AdminPage = ({} : AdminPageProps) => {

    return (
        <>
            <Row className="h-[90vh] gap-4 py-4 justify-center">
                <Col sm={12} md={5}  className="border border-black text-center">
                    <h1 className="text-center">АКТИВНІ ЗАПИСИ</h1>
                    <ActiveRecordsTable />
                </Col>
                <Col sm={12} md={6} className="border border-black">
                    <h1 className="text-center">НАЛАШТУВАННЯ РОБОЧОГО ДНЯ</h1>
                    <ActiveRecordsTable />
                </Col>
            </Row>
        </>
    )
}