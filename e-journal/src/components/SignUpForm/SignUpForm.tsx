import { useState } from 'react'
import { Button, Form, InputGroup, Row } from "react-bootstrap"
import { useSignUpForm } from "./useSignUpForm";
import { BrightnessHighFill } from "react-bootstrap-icons";


export const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const {
        confirmPassword,
        firstNameInput,
        lastNameInput,
        passwordInput,
        phoneNumberInput,
        registerHandle,
        showRegisterResult
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
                        <Form.Control {...passwordInput} type={showPassword ? 'text' : "password"}  placeholder="Введіть пароль" />
                        <InputGroup.Text id="basic-addon1">Повторіть</InputGroup.Text>
                        <Form.Control {...confirmPassword} type={showPassword ? 'text' : "password"} placeholder="Повторно введіть пароль" />
                        <InputGroup.Text id="basic-addon1">
                            <Button className="border-0 bg-transparent p-0" onClick={() => setShowPassword(!showPassword)}>
                                <BrightnessHighFill  className={showPassword ? `fill-red-500`:`fill-green-500`}/>
                            </Button>
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button variant="primary" type="submit" className="">
                        Зареєструватися
                    </Button>
                </Row>
                <Row>
                    {showRegisterResult}
                </Row>
            </Form>
        </>
    )
}