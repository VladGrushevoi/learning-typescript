import { Button, Form, InputGroup, Row } from "react-bootstrap"


export const SignUpForm = () => {
    return (
        <>
            <Form className="py-3 px-4">
                <Form.Group className="mb-3" controlId="">
                <Form.Label>Як Вас звати?</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Ім'я</InputGroup.Text>
                        <Form.Control type="text" placeholder="Введіть своє ім'я" />
                        <InputGroup.Text id="basic-addon1">Прізвище</InputGroup.Text>
                        <Form.Control type="text" placeholder="та прізвище" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Номер мобільного телефону</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">+380</InputGroup.Text>
                        <Form.Control type="text" placeholder="Введіть номер мобільного телефону" />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Придумайте пароль</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Пароль</InputGroup.Text>
                        <Form.Control type="password" placeholder="Введіть пароль" />
                        <InputGroup.Text id="basic-addon1">Повторіть свій пароль</InputGroup.Text>
                        <Form.Control type="password" placeholder="Повторно введіть пароль" />
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button variant="primary" type="submit" className="">
                        Зареєструватися
                    </Button>
                </Row>
            </Form>
        </>
    )
}