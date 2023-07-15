import { Col, Container, Row } from "react-bootstrap"
import { Profile } from "../../profile/Profile"
import { FakeUsers } from "../../../fake-data/faka_users"
import { Recordtable } from "../../record/RecordTable"

interface ProfilePageProps {

}

export const ProfilePage = ({ }: ProfilePageProps) => {

    return (
        <>
            <Container fluid className="px-6 py-4">
                <Row>
                    <Col md={5} className="border-2 border-black rounded-lg md:h-[80vh] h-[50vh] text-xl shadow-2xl" >
                        <Profile userData={FakeUsers[0]} />
                    </Col>
                    <Col md={2} xs={2} sm={2} className="my-4 md:m-0"></Col>
                    <Col md={5} className="border-2 border-green-400 rounded-lg md:h-[80vh] h-[50vh] shadow-2xl">
                        <h1
                            className="text-center mt-4 underline tracking-widest font-bold"
                        >
                            ІСТОРІЯ ЗАПИСІВ
                        </h1>
                            <Recordtable records={[...FakeUsers[0].isDoneRecords, ...FakeUsers[0].isActiveRecords]} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}