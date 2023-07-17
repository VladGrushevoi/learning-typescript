import { Col, Container, Row } from "react-bootstrap"
import { Profile } from "../../profile/Profile"
import { useFakeUser } from "../../../fake-data/faka_users"
import { Recordtable } from "../../record/RecordTable"

interface ProfilePageProps {

}

export const ProfilePage = ({ }: ProfilePageProps) => {

    const { fakeUser, updateUser } = useFakeUser();

    return (
        <>
            <Container fluid className="px-6 py-4">
                <Row className="gap-4 justify-center">
                    <Col md={5} className="border-2 border-black rounded-lg md:h-[80vh] h-[50vh] text-xl shadow-2xl" >
                        <Profile userData={fakeUser} updateUser={updateUser} />
                    </Col>
                    {/* <Col md={2} xs={2} sm={2} className="my-4 md:m-0"></Col> */}
                    <Col md={6} sm={12} xs={12} className="border-2 border-green-400 rounded-lg md:h-[80vh] h-[60vh] shadow-2xl">
                        <h1
                            className="text-center mt-4 underline tracking-widest font-bold"
                        >
                            ІСТОРІЯ ЗАПИСІВ
                        </h1>
                            <Recordtable records={[...fakeUser.isDoneRecords, ...fakeUser.isActiveRecords]} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}