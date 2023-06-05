import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { openai } from './openAi/openAi'

// interface Image {
//   url: string
// }

function App() {
  const [responseAI, setResponseAi] = useState<{__html: string | TrustedHTML}>({__html: ''})

  const handleAiResult = async (msg : string) => {
    const result = document.getElementById('result')
    console.log(result?.outerHTML)

    console.log(msg)
    const response = await openai.createEdit({
      model: "code-davinci-edit-001",
      input: result?.outerHTML,
      instruction: msg,
      temperature: 0.7,
    })

    console.log(response.data.choices[0].text)

    setResponseAi({__html: response.data.choices[0].text!})
  }
  return (
    <>
      <div id="result" dangerouslySetInnerHTML={{__html: responseAI.__html}}>
      </div>
      {/* <img src={responseAI?.url} alt="" /> */}
      <Chat handleAiResult={handleAiResult}/>
    </>
  )
}

export default App
