import { Col, Row } from "react-bootstrap"

export const MainPage = () => {

    return (
        <>
            <Row className=' px-6 py-8 text-center gap-4'>
                {/* <Col md={3} sm={4} xl={4} xxl={2} className='bg-blue-300 '>
                    <NavBar />
                </Col> */}
                <Col className='bg-black'>
                    <h1 className='h-[50vh]'> MAIN</h1>
                </Col>
                <Col lg={12} className='bg-green-500'>
                    <h1 className='h-[20vh]' >SOMETHING</h1>
                </Col>
            </Row>
        </>
    )
}