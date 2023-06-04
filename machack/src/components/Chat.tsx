import { useState } from 'react'
import { ChatForm } from "./ChatForm"
import { Output } from "./Output"

export const Chat = () => {

    const [messages, setMessages] = useState(Array<string>)

    const addMessage = (msg : string) => {
        setMessages(prev => [...prev, msg])
    }

    return (
        <>
            <div className="container fixed bottom-4 right-2 w-1/5  h-1/2 rounded-lg border shadow-lg shadow-pink-300">
                <Output messages = {messages}/>
                <ChatForm addMessage={addMessage}/>
            </div>
        </>
    )
}