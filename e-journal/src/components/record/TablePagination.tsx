import { Pagination, Row } from "react-bootstrap"

interface TablePaginationProps {
    setOffset : (newOffset : number) => void;
    amountPage: number,
    activePage: number
}

export const TablePagination = ({ amountPage, setOffset, activePage }: TablePaginationProps) => {
    return (
        <>
            <Row className="px-9 py-0 mt-0">
                <Pagination className="m-auto">
                    <Pagination.Prev onClick={() => setOffset(activePage - 1)} />
                        {
                            Array.from({ length: amountPage }).map((_, index) => {
                                return (
                                    <>
                                        <Pagination.Item 
                                            active={ index === activePage }
                                            onClick={() => setOffset(index)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    </>
                                )
                            })
                        }
                    <Pagination.Next onClick={() => setOffset(activePage + 1)} />
                </Pagination>
            </Row>
        </>
    )
}