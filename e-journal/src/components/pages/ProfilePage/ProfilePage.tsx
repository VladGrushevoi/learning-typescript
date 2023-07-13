import { Col, Container, Row } from "react-bootstrap"

interface ProfilePageProps {

}

export const ProfilePage = ({ }: ProfilePageProps) => {

    return (
        <>
            <Container fluid className="px-6 py-4">
                <Row>
                    <Col md={5} className="border-2 border-black rounded-lg md:h-[80vh] h-[50vh] text-xl" >
                        <h1
                            className="text-center py-4 underline tracking-widest font-bold"
                        >
                            ОСОБИСТА ІНФОРМАЦІЯ
                        </h1>
                        <Row className="py-2">
                            <Col md={4} className="text-gray-500 font-extrabold tracking-widest text-2xl">
                                <span>Ім'я:</span>
                            </Col>
                            <Col>
                                <h3>Петро Петрович</h3>                       
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col md={4}>
                                <span className="text-gray-500 font-extrabold tracking-widest text-2xl">Моб. номер:</span>
                            </Col>
                            <Col>
                                <h3>+38 (096) 605-15-01</h3>                       
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col md={4}>
                                <span className="text-gray-500 font-extrabold tracking-widest text-2xl">Кількість записів:</span>
                            </Col>
                            <Col>
                                <h3>22 разів</h3>                       
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} xs={2} sm={2} className="my-4 md:m-0"></Col>
                    <Col md={5} className="border-2 border-green-400 rounded-lg md:h-[80vh] h-[50vh]">
                        <h1
                            className="text-center"
                        >
                            ІСТОРІЯ ЗАПИСІВ
                        </h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}