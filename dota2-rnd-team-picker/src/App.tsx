import { Container, Col, Row, Button } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChecks } from './components/FormChecks';
import { useCheckForm } from './utils/useCheckForm';
import { useEffect, useState } from 'react';
import { Hero } from './types/hero';
import 'react-h5-audio-player/lib/styles.css';
import { randomHero } from './utils/randomHero';
import 'rrp-graceful-lines-plugin/dist/index.css';
import { Roulette } from './components/Roulette';
import { fixImageName } from './data/heros';
import { CustomAudioPlayer } from './components/AudioPlayer';
import { useHeroesList } from './hooks/useHeroesList';
import { HeroesList } from './components/HeroesList';
import { HeroCard } from './components/HeroCard';


function App() {

  const formChecks = useCheckForm();
  const { 
    addNewHeroToList,
    setShowAnimationToFalse,
    clearHeroesList,
    setLastHeroAnimationTrue,
    heroes
  } = useHeroesList()
  const [currHero, setCurrHero] = useState({} as Hero);

  const getRandomHero = () => {
    setShowAnimationToFalse();
    const hero = randomHero(formChecks)!;
    hero.isAnimated = true;
    if (hero) {
      addNewHeroToList(hero)
      setCurrHero(hero)
    }
  }

  useEffect(() => {
    const setLastAnimatedTrue = () => {
      setLastHeroAnimationTrue();
    }

    setLastAnimatedTrue();
  }, [currHero])

  useEffect(() => {
    const setAnimatedFalse = () => {
      setShowAnimationToFalse()
    }

    setAnimatedFalse();
  }, [...formChecks.checks.map(i => i.checked)])

  const handleSpin = (heroName: string, position: string) => {
    setShowAnimationToFalse();

    const fixNameForImage = heroName.split(" ").join("_").toLowerCase();
    const fixImageNameOther = fixImageName[fixNameForImage] ? fixImageName[fixNameForImage] : fixNameForImage;
    const hero : Hero = {
      isAnimated: true,
      imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${fixImageNameOther}.png`,
      name: heroName.split("_").join(" ").toUpperCase(),
      position: position
    }
    setCurrHero(hero);
    addNewHeroToList(hero);
  }


  return (
    <>
      <Container fluid className="md:h-min-[200vh] h-[100vh] w-[100%] bg-blue-900  px-4 text-center items-center
                        bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hTnQKM7cWTpuETxqbOBb1wHaEo%26pid%3DApi&f=1&ipt=3f22bd8d48024cbcc22f7424e121b33ebc7d2edbebfdad61ff8439cc486370e5&ipo=images')]
                        "
      >
        <Row className='gap-2 justify-center pt-12'>
          <Col sm={12} md={2} className='h-[55vh] border rounded-lg shadow-lg shadow-red-400 bg-black bg-opacity-75'>
            <Row className='text-center '>
              <h1 className='text-2xl text-slate-200 tracking-widest font-extrabold mt-2'>ПОЗИЦІЇ</h1>
            </Row>
            <Row className=' py-8 tracking-widest font-bold text-xl text-green-300'>
              <Col className='gap-2 justify-center items-center flex'>
                <FormChecks
                  checks={formChecks.checks}
                />
              </Col>
            </Row>
            <Row className=''>
              <CustomAudioPlayer />
            </Row>
          </Col>
          <Col sm={12} md={6} className='border text-center rounded-lg px-4 bg-black bg-opacity-75'>
              <HeroesList heroes={heroes}/>
            <Row>
              <Button className='bg-red-500' onClick={() => clearHeroesList()}>ОЧИСТИТИ</Button>
            </Row>
          </Col>
          <Col sm={12} md={3} className='border text-center rounded-lg px-4 pb-2 bg-black bg-opacity-75'>
            <Row><h1 className='text-2xl text-slate-200 tracking-widest font-extrabold mt-2'>РАНДОМНИЙ ГЕРОЙ</h1></Row>
            <Row className='py-4'>
              <HeroCard currHero={currHero} />
            </Row>
            <Row>
              <Button className='bg-green-600' onClick={getRandomHero}>КРУТАНУТЬ</Button>
            </Row>
          </Col>
        </Row>
        <Row className='roulette horizontal mt-2'>
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
