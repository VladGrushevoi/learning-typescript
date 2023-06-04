import { ItemChat } from "./ItemChat"

interface OutputProps {
    messages: string[]
}

export const Output = ({messages} : OutputProps) => {

    return (
        <>
        <div className="h-5/6">
            <div
                className="min-h-full max-h-full w-full bg-slate-300 outline-none overflow-auto"
            >
                {
                    messages.map(msg => <ItemChat text={msg} key={Math.random()} />)
                }
            </div>
        </div>
        </>
    )
}