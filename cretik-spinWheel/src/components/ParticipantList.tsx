import { Col, Row, Stack } from "react-bootstrap"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"

interface ParticipantListProps {
    participants: WheelData[],
}


export const ParticipantList = ({ participants }: ParticipantListProps) => {
    return (
        <>
            <Stack direction='vertical'>
                <Row className="m-auto text-white my-4 font-extrabold tracking-widest text-2xl">УЧАСНИКИ</Row>
                {
                    participants.map((p, index) => (
                        <>
                            <Row className="text-white font-bold" key={Math.random()}>
                                <Col md={1} key={Math.random()}>{++index}.</Col>
                                <Col md={8} key={Math.random()}>{p.option}</Col>
                                <Col key={Math.random()}>{p.optionSize}pts</Col>
                            </Row>
                        </>
                    ))
                }
            </Stack>
        </>
    )
}