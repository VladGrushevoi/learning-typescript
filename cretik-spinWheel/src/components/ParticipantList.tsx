import { Col, Row, Stack } from "react-bootstrap"
import { Participant } from "../types/participant"

interface ParticipantListProps {
    participants: Participant[],
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
                                <Col md={8} key={Math.random()}>{p.name}{p.name}</Col>
                                <Col key={Math.random()}>{p.amountPts}pts</Col>
                            </Row>
                        </>
                    ))
                }
            </Stack>
        </>
    )
}