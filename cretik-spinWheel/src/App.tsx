import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { ParticipantList } from './components/ParticipantList'
import { FormParticipant } from './components/FormParticipant'
import { useState } from 'react'
import { Participant } from './types/participant'
import { SpinWheel } from './components/SpinWheel'

function App() {

  const [participants, setParticipant] = useState([] as Participant[])

  const addParticipant = (newParticipant : Participant) => {
    setParticipant([...participants, newParticipant]);
  }
  return (
    <>
      <Container className='bg-purple-900 h-[100vh]' fluid>
        <Row className='h-[100vh]'>
          <Col className='border-r-2 '>
            <ParticipantList participants={participants} />
          </Col>
          <Col md={9} className='gap-4'>
            <SpinWheel participants={participants}/>
            <Row className='border h-[20vh]'>
              <Col>
                <FormParticipant AddParticipantAction={addParticipant}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
