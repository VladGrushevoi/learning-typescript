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
        participentName.setdefault();
        amountPts.setdefault();
    }

    return (
        <>
            <InputGroup as="form" size="lg" className='mt-5' onSubmit={handleSubmit}>
                  <InputGroup.Text id="inputGroup-sizing-lg">УЧАСНИК</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={participentName.onChange}
                    name={participentName.name}
                    value={participentName.value}
                  />
                  <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={amountPts.onChange}
                    name={amountPts.name}
                    value={amountPts.value}
                  />
                  <Button type="submit" variant="primary">ДОДАТИ</Button>
                </InputGroup>
        </>
    )
}