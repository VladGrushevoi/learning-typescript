import { Button, Tab, Table } from "react-bootstrap"
import { DayInfoType, Status, WorkTime } from "../../types/dayInfoType"

interface DayInfoTableProps {
    data: DayInfoType[]
}

export const DayInfoTable = ({ data }: DayInfoTableProps) => {

    const typeTimeColor = (item : WorkTime) => {
        return `${
            item.status === Status.Free ? 'text-green-300' 
            : item.status === Status.TemporaryHold ? 'text-orange-300'
            : 'bg-red-300'}`
    }

    const isFreeTime = (item : WorkTime) : boolean => {
        return item.status === Status.Free
    }

    return (
        <>
            {
                data.map(item => {

                    return (
                        <>
                            <Tab.Pane eventKey={item.day} key={Math.random()} >
                                <Table  className="text-center w-[80%] m-0" hover variant="primary" size="sm">
                                    <thead className="">
                                        <tr >
                                            <th >ЧАС</th>
                                            <th >Статус</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            item.times.map(item => {
                                                return (
                                                    <>
                                                        <tr key={Math.random()} className={`${typeTimeColor(item)}`} >
                                                            <td >{item.time}</td>
                                                            <td >{item.status}</td>
                                                            <td ><Button key={Math.random()} variant="success" disabled={!isFreeTime(item)}>Записатися</Button></td>
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