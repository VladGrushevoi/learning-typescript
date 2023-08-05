import { useState } from "react"

const musicList = [
    "http://stream.zeno.fm/71ntub27u18uv",
    "https://download.xn--41a.wiki/cache/2/66d/6555612_456244947.mp3?filename=Huby-Danika%20House.mp3",
    "https://download.xn--41a.wiki/cache/2/7e1/252581702_456243505.mp3?filename=%D0%9F%D0%BE%D0%BB%D0%B5%20%D0%A7%D1%83%D0%B4%D0%B5%D1%81-%D0%97%D0%B2%D1%83%D0%BA%20%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B1%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%B0%20%D0%B2%20%D0%9F%D0%BE%D0%BB%D0%B5%20%D0%A7%D1%83%D0%B4%D0%B5%D1%81.mp3"
  ]

export const useAudioPlayer = () => {
    const [currTrack, setCurrTrack] = useState(0)

    const handleNext = (iter: number) => {
        console.log("next")
        if(iter + currTrack < 0){
          setCurrTrack(musicList.length - 1)
          return;
        }
        if(iter + currTrack > musicList.length){
          setCurrTrack(0)
          return;
        }
        console.log(currTrack);
        setCurrTrack(iter + currTrack);
      }

      return {
        handleNext,
        musicUrl: musicList[currTrack]
      }

}