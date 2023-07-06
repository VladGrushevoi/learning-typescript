import { Container, Row, Col, Stack, Button, InputGroup, Form } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <Container className='bg-purple-900 h-[100vh]' fluid>
        <Row className='h-[100vh]'>
          <Col className='border-r-2 '>
            <Stack direction='vertical'>
              <Row>
                <Col md={6}>ЛОХ1</Col>
                <Col>200pts</Col>
              </Row>
              <Row>
                <Col md={6}>ЛОХ2</Col>
                <Col>200pts</Col>
              </Row>
              <Row>
                <Col md={6}>ЛОХ2</Col>
                <Col>200pts</Col>
              </Row>
            </Stack>
          </Col>
          <Col md={10} className='gap-4'>
            <Row md={10} className=''>
              <Col>
                <div className='rounded-full border w-[80vh] h-[80vh] m-auto'></div>
              </Col>
            </Row>
            <Row className='border h-[20vh]'>
              <Col>
                <InputGroup size="lg" className='mt-5'>
                  <InputGroup.Text id="inputGroup-sizing-lg">ЛОХ</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                  <Button variant="outline-secondary">ДОДАТИ</Button>
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
