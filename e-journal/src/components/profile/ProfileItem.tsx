import { Col, Row } from "react-bootstrap"

interface ProfileItemProps {
    title: string,
    value: string | number
}

export const ProfileItem = ({ title, value } : ProfileItemProps) => {

    return (
        <>
            <Row className="py-2">
                <Col md={4} className="text-gray-500 font-extrabold tracking-widest text-2xl">
                    <span>{title}:</span>
                </Col>
                <Col>
                    <h3>{value}</h3>
                </Col>
            </Row>
        </>
    )
}