import { useInput } from "../hooks/useInput"

interface ChatFormProps {
    addMessage: (msg : string) => void,
}

export const ChatForm = ({addMessage} : ChatFormProps) => {
    const msgInput = useInput("");
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        addMessage(msgInput.value)
        msgInput.setDefault()
    }
    return (
        <>
            <form 
                className="border-2 rounded-lg h-1/6 items-center flex bg-purple-200"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    className="py-2 px-4 w-5/6 h-full rounded-sm outline-0"
                    {...msgInput}
                />
                <button 
                    type="submit"
                    className="text-center bg-slate-400 w-1/6 h-full rounded-md"
                    >send</button>
            </form>
        </>
    )
}