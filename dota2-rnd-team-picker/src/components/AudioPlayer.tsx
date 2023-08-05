import { useAudioPlayer } from "../hooks/useAudioPlayer"
import AudioPlayer from 'react-h5-audio-player';

export const CustomAudioPlayer = () => {
    const {handleNext, musicUrl} = useAudioPlayer();


    return (
        <>
           <AudioPlayer 
                autoPlay={true}
                src={musicUrl}
                onPlay={_ => console.log("onPlay")}
                showJumpControls={false}
                showSkipControls={true}
                onClickNext={() => handleNext(1)}
                onClickPrevious={() => handleNext(-1)}
              /> 
        </>
    )
}