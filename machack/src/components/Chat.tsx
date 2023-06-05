import { useState } from 'react'
import { ChatForm } from "./ChatForm"
import { Output } from "./Output"

interface ChatProps {
    handleAiResult : (msg : string) => void,
}

export const Chat = ({handleAiResult}:ChatProps) => {

    const [messages, setMessages] = useState(Array<string>)

    const addMessage = (msg : string) => {
        setMessages(prev => [...prev, msg])
        handleAiResult(msg)
    }

    return (
        <>
            <div className="container fixed bottom-4 right-2 w-[800px]  h-1/4 rounded-lg border shadow-lg shadow-pink-300">
                <Output messages = {messages}/>
                <ChatForm addMessage={addMessage}/>
            </div>
        </>
    )
}