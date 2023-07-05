import { Button, Tab, Table } from "react-bootstrap"
import { DayInfoType } from "../../types/dayInfoType"

interface DayInfoTableProps {
    data: DayInfoType[]
}

export const DayInfoTable = ({ data }: DayInfoTableProps) => {

    return (
        <>
            {
                data.map(item => {

                    return (
                        <>
                            <Tab.Pane eventKey={item.day} key={Math.random()} >
                                <Table  className="text-center" striped bordered hover size="sm">
                                    <thead >
                                        <tr >
                                            <th >ЧАС</th>
                                            <th >Статус</th>
                                            <th >Тут нопка</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            item.times.map(item => {
                                                return (
                                                    <>
                                                        <tr key={Math.random()}>
                                                            <td >{item}</td>
                                                            <td >Вільно</td>
                                                            <td ><Button key={Math.random()} variant="success">Записатися</Button></td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                        </>
                    )
                })
            }
        </>
    )
}