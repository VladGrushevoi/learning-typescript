import { Nav } from "react-bootstrap"
import { DayInfoType } from "../../types/dayInfoType"
interface DateButtonProps {
    days: DayInfoType[],
}



export const DateButton = ({ days }: DateButtonProps) => {

    return (
        <>
            {
                days.map(item => {
                    return (
                        <>
                            <Nav.Item key={Math.random()} className="hover:bg-slate-300">
                                <Nav.Link 
                                eventKey={item.day} 
                                disabled={item.times.length === 0 ? true : false}
                                className="sm:w-4"
                                >{item.day}</Nav.Link>
                            </Nav.Item>
                        </>
                    )
                })
            }
        </>
    )
}