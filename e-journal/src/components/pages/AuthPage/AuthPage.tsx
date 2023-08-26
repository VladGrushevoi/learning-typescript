import { Col, Row, Tab, Tabs } from "react-bootstrap"
import { SignInForm } from "../../SignInForm/SignInForm"

interface AuthPageProps {

}

export const AuthPage = ({ }: AuthPageProps) => {
    return (
        <>
            <Row className="">
                <Col sm={1} md={2} lg={3}></Col>
                <Col>
                <Tabs
                    defaultActiveKey="signIn"
                    id="uncontrolled-tab-example"
                    className="mb-3 justify-center"
                >
                    <Tab 
                        eventKey="signIn" 
                        title="АВТОРИЗАЦІЯ"
                        className="justify-center content-center py-4 px-3 items-center border border-black rounded-2xl shadow-md shadow-green-500"
                        >
                        <SignInForm />
                    </Tab>
                    <Tab eventKey="signUp" title="РЕЄСТРАЦІЯ">
                        РЕЄСТРАЦІЯ
                    </Tab>
                </Tabs>
                </Col >
                <Col sm={1} md={2} lg={3}></Col>
            </Row>
        </>
    )
}