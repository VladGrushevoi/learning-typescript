import { Col, Row } from "react-bootstrap"

export const MainPage = () => {

    return (
        <>
            <Row className=' px-6 py-8 text-center gap-3 h-[75vh]'>
                <Col  className='border-2 rounded-2xl border-orange-300 shadow-lg h-[70%]'>
                </Col>
                <Col lg={3} className='bg-green-300 rounded-lg h-[30%]'>
                </Col>
            </Row>
        </>
    )
}