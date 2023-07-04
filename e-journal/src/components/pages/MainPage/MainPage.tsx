import { Button, Col, Nav, Row, Table } from "react-bootstrap"
import { DateButton } from "../../bottons/DateButton"

export const MainPage = () => {

    return (
        <>
            <Row className=' px-6 py-8 text-center gap-3 h-[80vh]'>
                <Col className='border-2 rounded-2xl border-orange-300 shadow-lg'>
                    <Row className="gap-4">
                        <Col className="">
                            <Nav className="md:flex-row sm:flex-row">
                                <DateButton />
                                <DateButton />
                                <DateButton />
                                {/* <DateButton />
                                <DateButton />
                                <DateButton />
                                <DateButton /> */}
                            </Nav>
                        </Col>
                        <Col sm={12} md={12} xs={12} lg={12} className="border bg-slate-200">
                            <Table className="text-center" striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>ЧАС</th>
                                        <th>Статус</th>
                                        <th>Тут нопка</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>9:00</td>
                                        <td>Вільно</td>
                                        <td><Button variant="success">Записатися</Button></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>10:00</td>
                                        <td>Записано</td>
                                        <td><Button variant="error">Записатися</Button></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>11:00</td>
                                        <td>Вільно</td>
                                        <td><Button variant="success">Записатися</Button></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>12:00</td>
                                        <td>Вільно</td>
                                        <td><Button variant="success">Записатися</Button></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>13:00</td>
                                        <td>Вільно</td>
                                        <td><Button variant="success">Записатися</Button></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
                <Col lg={2} className='bg-green-300 rounded-lg'>
                </Col>
            </Row>
        </>
    )
}