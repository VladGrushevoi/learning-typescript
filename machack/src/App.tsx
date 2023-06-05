import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { openai } from './openAi/openAi'

// interface Image {
//   url: string
// }

function App() {
  const [responseAI, setResponseAi] = useState({__html: ""})

  const handleAiResult = async (msg : string) => {
    const result = document.getElementById('result')
    console.log(result?.outerHTML)

    console.log(msg)
    const response = await openai.createEdit({
      model: "code-davinci-edit-001",
      input: result?.outerHTML,
      instruction: msg
    })

    console.log(response.data)

    setResponseAi({...responseAI, __html: response.data.choices[0].text!})
  }
  return (
    <>
      <div id="result">
      </div>
      {/* <img src={responseAI?.url} alt="" /> */}
      <Chat handleAiResult={handleAiResult}/>
    </>
  )
}

export default App
