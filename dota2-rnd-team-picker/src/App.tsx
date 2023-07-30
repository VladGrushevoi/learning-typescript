import { Container, Col, Row } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Container fluid className='h-[100vh] bg-blue-900 px-16 py-20 gap-2'>
        <Col md={3}>
            <Row className='text-center border h-[50vh] rounded-lg shadow-lg shadow-white'>
              <h1 className='text-2xl text-slate-200 tracking-widest font-extrabold'>ПОЗИЦІЇ</h1>
            </Row>
        </Col>
        <Col md={3}>
        
        </Col>
        <Col md={3}>
        
        </Col>
      </Container>
    </>
  )
}

export default App
