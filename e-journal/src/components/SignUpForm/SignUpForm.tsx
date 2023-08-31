import { Button, Form, InputGroup, Row } from "react-bootstrap"
import { useSignUpForm } from "./usesignUpForm"


export const SignUpForm = () => {

    const {
        confirmPassword,
        firstNameInput,
        lastNameInput,
        passwordInput,
        phoneNumberInput,
        registerHandle
    } = useSignUpForm();

    return (
        <>
            <Form className="py-3 px-4" onSubmit={registerHandle}>
                <Form.Group className="mb-3" controlId="">
                <Form.Label>Як Вас звати?</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Ім'я</InputGroup.Text>
                        <Form.Control {...firstNameInput} type="text" placeholder="Введіть своє ім'я" />
                        <InputGroup.Text id="basic-addon1">Прізвище</InputGroup.Text>
                        <Form.Control {...lastNameInput} type="text" placeholder="та прізвище" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Номер мобільного телефону</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">+38</InputGroup.Text>
                        <Form.Control {...phoneNumberInput} type="text" placeholder="Введіть номер мобільного телефону" />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Придумайте пароль</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">Пароль</InputGroup.Text>
                        <Form.Control {...passwordInput} type="password" placeholder="Введіть пароль" />
                        <InputGroup.Text id="basic-addon1">Повторіть свій пароль</InputGroup.Text>
                        <Form.Control {...confirmPassword} type="password" placeholder="Повторно введіть пароль" />
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