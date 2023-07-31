import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChecks } from './components/FormChecks';
import { useCheckForm } from './utils/useCheckForm';
import { useState } from 'react';
import { Hero } from './types/hero';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { randomHero } from './utils/randomHero';
import 'rrp-graceful-lines-plugin/dist/index.css';
import { Roulette } from './components/Roulette';

const musicList = [
  "http://stream.zeno.fm/71ntub27u18uv",
  "https://us-tuna-sounds-files.voicemod.net/a56a691f-7524-444c-8d92-24e3f2860193-1673968519904.mp3"
]

function App() {

  const formChecks = useCheckForm();
  const [heroes, setHero] = useState([] as Hero[])
  const [currHero, setCurrHero] = useState({} as Hero);
  const [currTrack, setCurrTrack] = useState(0)
  const getRandomHero = () => {
    const hero = randomHero(formChecks)!;
    if (hero) {
      setHero(prev => [...prev, hero])
      setCurrHero(hero)
    }
  }

  const clearHero = () => {
    setHero([] as Hero[])
  }

  const handleSpin = (heroName: string, position: string) => {
    setCurrHero({
      isPick: true,
      imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`,
      name: heroName,
      position: position
    })
    setHero(prev => [...prev, {
      imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`,
      isPick: true,
      name: heroName,
      position: position
    }])
  }

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

  //bg bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hTnQKM7cWTpuETxqbOBb1wHaEo%26pid%3DApi&f=1&ipt=3f22bd8d48024cbcc22f7424e121b33ebc7d2edbebfdad61ff8439cc486370e5&ipo=images')]

  return (
    <>
      <Container fluid className="md:h-[100vh] h-[200vh] w-[100%] bg-blue-900 px-8 py-10 gap-2 text-center
                        bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hTnQKM7cWTpuETxqbOBb1wHaEo%26pid%3DApi&f=1&ipt=3f22bd8d48024cbcc22f7424e121b33ebc7d2edbebfdad61ff8439cc486370e5&ipo=images')]
                        "
      >
        <Row className='gap-4'>
          <Col sm={12} md={2} className='h-[55vh] border rounded-lg shadow-lg shadow-red-400'>
            <Row className='text-center '>
              <h1 className='text-2xl text-slate-200 tracking-widest font-extrabold'>ПОЗИЦІЇ</h1>
            </Row>
            <Row className=' py-8 tracking-widest font-bold text-xl text-green-300'>
              <Col className='gap-2 justify-center items-center flex'>
                <FormChecks
                  checks={formChecks.checks}
                />
              </Col>
            </Row>
            <Row className=''>
              {/* <H5AudioPlayer
                className='even:inline-block'
                autoPlay={true}
                src='http://stream.zeno.fm/71ntub27u18uv'
                showSkipControls={false}
                showJumpControls={false}
                showFilledProgress={false}
                showDownloadProgress={false}
                showFilledVolume={false}
                defaultCurrentTime={<div></div>}
                defaultDuration={<div></div>}
              /> */}
              <AudioPlayer 
                autoPlay={true}
                src={musicList[currTrack]}
                onPlay={_ => console.log("onPlay")}
                showJumpControls={true}
                showSkipControls={true}
                onClickNext={() => handleNext(1)}
                onClickPrevious={() => handleNext(-1)}
              />
            </Row>
          </Col>
          <Col sm={12} md={6} className='border text-center rounded-lg px-4'>
            <Row><h1 className='text-2xl text-slate-200 tracking-widest font-extrabold'>ПІК</h1></Row>
            <Row className='text-gray-200 font-bold text-xl'>
              <Col xs={1} sm={1} md={1}>#</Col>
              <Col xs={3} sm={3} md={3}>Позиція</Col>
              <Col>Герой</Col>
            </Row>
            <Row>
              {
                heroes.map((hero, index) => {
                  return (
                    <Row key={Math.random()} className='text-gray-200  text-xl'>
                      <Col xs={1} sm={1} md={1}>{index + 1}</Col>
                      <Col xs={3} sm={3} md={3}>{hero.position}</Col>
                      <Col className='flex justify-start my-1'>
                        <Col xs={6} sm={6} md={6} className='text-right'>
                          <img src={hero.imgSrc!} className='h-[40px] inline-block' />
                        </Col>
                        <Col md={1}></Col>
                        <Col className='justify-start text-left'>
                          {hero.name}
                        </Col>
                      </Col>
                    </Row>
                  )
                })
              }
            </Row>
            <Row>
              <Button className='bg-red-500' onClick={clearHero}>ОЧИСТИТИ</Button>
            </Row>
          </Col>
          <Col sm={12} md={3} className='border text-center rounded-lg px-4 pb-2'>
            <Row><h1 className='text-2xl text-slate-200 tracking-widest font-extrabold'>РАНДОМНИЙ ГЕРОЙ</h1></Row>
            <Row className='py-4'>
              <Card style={{ width: '18rem' }} className='m-auto px-0'>
                <Card.Img variant="top" src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${currHero.name}.png`} />
                <Card.Body>
                  <Card.Title>{currHero.name}</Card.Title>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Button className='bg-green-600' onClick={getRandomHero}>КРУТАНУТЬ</Button>
            </Row>
          </Col>
        </Row>
        <Row className='roulette horizontal'>
          <Roulette
            handleSpin={handleSpin}
            formChecks={formChecks}
          />
        </Row>
      </Container>
    </>
  )
}

export default App
