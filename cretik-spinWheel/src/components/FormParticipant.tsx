import { Button, Form, InputGroup } from "react-bootstrap"
import { useInput } from "../hooks/useInput"
import { Participant } from "../types/participant";

interface FormParticipantProps{
    AddParticipantAction: (newParticipant: Participant) => void
}

export const FormParticipant = ({AddParticipantAction} : FormParticipantProps) => {

    let participentName = useInput("", "name");
    let amountPts = useInput("", "pts");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const partisipantInfo = {
            name: participentName.value,
            amountPts: amountPts.value,
        };

        AddParticipantAction(partisipantInfo);
        participentName.setDefault();
        amountPts.setDefault();
    }

    return (
        <>
            <InputGroup as="form" size="lg" className='mt-5' onSubmit={handleSubmit}>
                  <InputGroup.Text id="inputGroup-sizing-lg">УЧАСНИК</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    {...participentName}
                  />
                  <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    {...amountPts}
                  />
                  <Button type="submit" variant="primary">ДОДАТИ</Button>
                </InputGroup>
        </>
    )
}