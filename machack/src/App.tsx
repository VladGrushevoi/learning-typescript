import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { openai } from './openAi/openAi'

function App() {
  const [responseAI, setResponseAi] = useState("")  
  //const result = document.getElementById('result')

  const handleAiResult = async (msg : string) => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role:"user", content: msg}]
    })
    console.log(response.data.choices[0].message)
    setResponseAi(response.data.choices[0].message?.content!)
  }
  return (
    <>
      <div id="result">
      {responseAI}
      </div>
      <Chat handleAiResult={handleAiResult}/>
    </>
  )
}

export default App
