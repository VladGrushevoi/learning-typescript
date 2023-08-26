import { Button, Form, InputGroup, Row } from "react-bootstrap"

export const SignInForm = () => {
    return (
        <>
            <Form className="py-3 px-4">
                <Form.Label>Номер мобільного телефону</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">+380</InputGroup.Text>
                        <Form.Control type="email" placeholder="Мобільний номер" />
                    </InputGroup>
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
                        Увійти
                    </Button>
                </Row>
            </Form>
        </>
    )
}