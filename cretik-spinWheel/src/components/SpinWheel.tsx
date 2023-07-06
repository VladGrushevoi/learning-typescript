import { Col, Row } from "react-bootstrap"
import { Participant } from "../types/participant"
import * as d3 from "d3"

interface SpinWheelProps {
  participants: Participant[],
}

export const SpinWheel = ({ participants }: SpinWheelProps) => {

  return (
    <>
      <Row md={10} className=''>
        <Col>
          <canvas className='w-[80vh] h-[80vh] m-auto'></canvas>
        </Col>
      </Row>
    </>
  )
}