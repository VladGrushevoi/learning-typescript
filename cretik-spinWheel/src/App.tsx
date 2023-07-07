import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import { ParticipantList } from './components/ParticipantList'
import { FormParticipant } from './components/FormParticipant'
import { useState } from 'react'
import { Participant } from './types/participant'
import { SpinWheel } from './components/SpinWheel'
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { participantToWhellData } from './utils/prepareDataForWheel'

function App() {

  //const [participants, setParticipant] = useState([] as Participant[])
  const [dataForWheel, setDataForWheel] = useState([] as WheelData[])

  const addParticipant = (newParticipant : Participant) => {
    //setParticipant([...participants, newParticipant]);
    setDataForWheel([...dataForWheel, participantToWhellData(newParticipant)]);
  }

  const setDefaultParticipant = () => {
    console.log("REMOVE ALL PARTCIPANT");
    setDataForWheel([]);
  }
  return (
    <>
      <Container className='bg-purple-900 h-[100vh]' fluid>
        <Row className='h-[100vh]'>
          <Col className='border-r-2 '>
            <ParticipantList participants={dataForWheel} />
          </Col>
          <Col md={9} className='gap-4'>
            <SpinWheel dataForWheel={dataForWheel} setDefaultParticipant={setDefaultParticipant}/>
            <Row className='h-[20vh]'>
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
