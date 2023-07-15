import { Row, Table } from "react-bootstrap"
import { Record } from "../../types/User"
import { TablePagination } from "./TablePagination"
import { useState } from "react"

interface RecordTableProps {
    records: Record[]
}

export const Recordtable = ({ records }: RecordTableProps) => {
    const row = 5;
    const amountPage = Math.ceil(records.length / row)
    const [offSet, setOffset] = useState(0);

    const changeOffset = (newOffset : number) => {
        if(newOffset <= 0){
            setOffset(0)
            return
        }
        else if(newOffset >= amountPage - 1){
            setOffset(amountPage - 1)
            return
        }else{
            setOffset(newOffset)
        }
    }

    return (
        <>
            <Row className="pt-6 px-4 mb-0">
                <Table responsive className="text-xl" color={"red"} size="sm">
                    <thead className="rounded-md">
                        <tr>
                            <td>#</td>
                            <td>ЧАС</td>
                            <td>ДАТА</td>
                            <td>СТАТУС</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records && records.slice(offSet * row, (offSet * row) + row).map((item, index) => {

                                return (
                                    <>
                                        <tr className="fill-green-400 p-4">
                                            <td>{offSet * row + index + 1}</td>
                                            <td>{item.time}</td>
                                            <td>{item.date}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Row>
            <TablePagination 
                amountPage={amountPage}  
                setOffset={changeOffset} 
                activePage={offSet}
            />
        </>
    )
}