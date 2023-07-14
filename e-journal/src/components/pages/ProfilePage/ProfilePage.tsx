import { Col, Container, Pagination, Row, Table } from "react-bootstrap"
import { Profile } from "../../profile/Profile"
import { FakeUsers } from "../../../fake-data/faka_users"

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
                        <Row className="pt-6 px-4 mb-0">
                                <Table responsive className="text-xl" color={"red"} size="sm">
                                    <thead className="rounded-md">
                                        <tr>
                                            <td>#</td>
                                            <td>ЧАС</td>
                                            <td>ДАТА</td>
                                            <td>СТАТУС</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>11:00</td>
                                            <td>15.07.2023</td>
                                            <td>Виконано</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>11:00</td>
                                            <td>15.07.2023</td>
                                            <td>Виконано</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>11:00</td>
                                            <td>15.07.2023</td>
                                            <td>Виконано</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>11:00</td>
                                            <td>15.07.2023</td>
                                            <td>Виконано</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>11:00</td>
                                            <td>15.07.2023</td>
                                            <td>Виконано</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                            <Row className="px-9 py-0 mt-0">
                                <Pagination className="m-auto">
                                    <Pagination.Prev />
                                   <Pagination.Item active>
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item>
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item>
                                        3
                                    </Pagination.Item> 
                                    <Pagination.Next />
                                </Pagination>
                            </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}