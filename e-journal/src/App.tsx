import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <Container className='h-full bg-pink-200 min-h-screen' fluid>
        <Row className="bg-gradient bg-primary text-center h-1/5  rounded-b-2xl">
          <h1>HEADER</h1>
        </Row>
        <Row className=' px-6 py-8 text-center gap-4'>
          <Col md={3} sm={4} xl={4} xxl={2} className='bg-blue-300 h-[20vh]'>
            <h1>NAVIGATION</h1>
          </Col>
          <Col  className='bg-black'>
            <h1 className='h-[45vh]'> MAIN</h1>
          </Col>
          <Col lg={12} className='bg-green-500'>
          <h1 className='h-[15vh]' >SOMETHING</h1>
          </Col>
        </Row>
        <Row className='bg-gradient text-center fixed bottom-0 w-full rounded-t-2xl'>
          <h1 >ПІДВАЛ</h1>
        </Row>
      </Container>
    </>
  )
}

export default App
