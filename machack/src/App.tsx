import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { openai } from './openAi/openAi'

// interface Image {
//   url: string
// }

function App() {
  const [responseAI, setResponseAi] = useState<string>()

  const handleAiResult = async (msg : string) => {
    const result = document.getElementById('result')
    console.log(result?.outerHTML)

    console.log(msg)
    const response = await openai.createImage({
      prompt: msg,
      n: 1,
      size: "1024x1024"
    })

    console.log(response.data.data[0].url)

    setResponseAi(response.data.data[0].url)
  }
  return (
    <>
      {/* <div id="result" dangerouslySetInnerHTML={{__html: responseAI.__html}}>
      </div> */}
      <img src={responseAI} alt="" />
      <Chat handleAiResult={handleAiResult}/>
    </>
  )
}

export default App
