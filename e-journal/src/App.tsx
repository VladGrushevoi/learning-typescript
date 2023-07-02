import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <Container className='h-full' fluid>
        <Row className="bg-gradient bg-primary text-center h-1/5">
          <h1 >HEADER</h1>
        </Row>
        <Row className='h-3/5'>
          <Col xs={2} md={2} className='bg-blue-300'>
            <h1>NAVIGATION</h1>
          </Col>
          <Col xs={6} md={8} className='bg-black'>
            <h1 >MAIN</h1>
          </Col>
          <Col className='bg-green-500'>
          <h1 >SOMETHING</h1>
          </Col>
        </Row>
        <Row className='bg-gradient bg-warning text-center'>
          <h1 >ПІДВАЛ</h1>
        </Row>
      </Container>
    </>
  )
}

export default App
