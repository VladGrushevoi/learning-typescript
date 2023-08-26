import { Col, Row, Tab, Tabs } from "react-bootstrap"
import { SignInForm } from "../../SignInForm/SignInForm"
import { SignUpForm } from "../../SignUpForm/SignUpForm"
import "./AuthPage.css"

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
                        className="justify-center signIn-left-anime content-center py-4 px-3 items-center border rounded-2xl shadow-md shadow-green-500"
                        >
                        <SignInForm />
                    </Tab>
                    <Tab 
                        eventKey="signUp" 
                        title="РЕЄСТРАЦІЯ"
                        className="justify-center signUp-left-anime content-center py-4 px-3 items-center border rounded-2xl shadow-md shadow-green-500"
                        >
                        <SignUpForm />
                    </Tab>
                </Tabs>
                </Col >
                <Col sm={1} md={2} lg={3}></Col>
            </Row>
        </>
    )
}