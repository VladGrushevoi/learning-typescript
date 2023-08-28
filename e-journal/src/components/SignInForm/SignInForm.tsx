import { Button, Form, InputGroup, Row } from "react-bootstrap"
import { useSignInForm } from "./useSignInForm";

export const SignInForm = () => {
    const {doLogin, passwordInput, phoneInput} = useSignInForm();
    return (
        <>
            <Form className="py-3 px-4" onSubmit={doLogin}>
                <Form.Label>Номер мобільного телефону</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">+380</InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="Мобільний номер"
                            {...phoneInput} 
                            />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Пароль" 
                        {...passwordInput}
                        />
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