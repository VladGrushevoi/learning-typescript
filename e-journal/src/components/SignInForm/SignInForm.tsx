import { Button, Form, Row } from "react-bootstrap"

export const SignInForm = () => {
    return (
        <>
            <Form className="py-3 px-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Номер мобільного телефону</Form.Label>
                    <Form.Control type="email" placeholder="Мобільний номер" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Запам'ятати мене" />
                </Form.Group>
                <Row>
                <Button variant="primary" type="submit" className="">
                    Submit
                </Button>
                </Row>
            </Form>
        </>
    )
}