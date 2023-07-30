import { Nav } from "react-bootstrap"
interface DateButtonProps {
    workingDays: {
        name: string,
        isWorking: boolean
    }[]
}



export const DateButton = ({ workingDays }: DateButtonProps) => {

    return (
        <>
            {
                workingDays.map(item => {
                    return (
                            <Nav.Item key={Math.random()} className="hover:bg-slate-300">
                                <Nav.Link 
                                eventKey={item.name} 
                                disabled={!item.isWorking}
                                >{item.name}</Nav.Link>
                            </Nav.Item>
                    )
                })
            }
        </>
    )
}