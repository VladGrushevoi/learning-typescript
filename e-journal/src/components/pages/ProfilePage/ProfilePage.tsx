import { Col, Container, Row } from "react-bootstrap"

interface ProfilePageProps {

}

export const ProfilePage = ({ }: ProfilePageProps) => {

    return (
        <>
            <Container fluid className="px-6 py-4">
                <Row>
                    <Col md={5} className="border-2 border-black rounded-lg h-[80vh] md:h-[50vh]" >
                        <h1
                            className="text-center"
                        >
                            ОСОБИСТА ІНФОРМАЦІЯ
                        </h1>
                    </Col>
                    <Col md={2} xs={2} sm={2} className="my-4 md:m-0"></Col>
                    <Col md={5} className="border-2 border-green-400 rounded-lg h-[80vh] md:h-[50vh]">
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