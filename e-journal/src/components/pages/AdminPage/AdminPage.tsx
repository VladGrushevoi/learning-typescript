import { Col, Row } from "react-bootstrap"
import { ActiveRecordsTable } from "../../record/ActiveRecordTable"

interface AdminPageProps {

}

export const AdminPage = ({} : AdminPageProps) => {

    return (
        <>
            <Row className="h-[90vh]">
                <Col md={6} className="border border-black">
                    <h1>АКТИВНІ ЗАПИСИ</h1>
                    <ActiveRecordsTable />
                </Col>
            </Row>
        </>
    )
}