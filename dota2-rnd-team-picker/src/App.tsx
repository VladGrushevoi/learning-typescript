import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChecks } from './components/FormChecks';
import { useCheckForm } from './utils/useCheckForm';
import { useState } from 'react';
import { Hero } from './types/hero';
import { Position } from './types/positionEnum';
import { carry, hard_support, midlaner, offlaner, soft_support } from './data/heros';
import H5AudioPlayer from 'react-h5-audio-player';

function App() {

  const formChecks = useCheckForm();
  const [heroes, setHero] = useState([] as Hero[])
  const [currHero, setCurrHero] = useState({} as Hero);
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const getRandomHero = () => {
    //https://cdn.dota2.com/apps/dota2/images/heroes/antimage_full.png
    const choisenPos = formChecks.checks.filter(i => i.checked).map(i => i.name);
    const rndPosIndx = randomIntFromInterval(0, choisenPos.length - 1);
    const namePos = choisenPos[rndPosIndx];
    let rndHero = 0;
    let heroName = "";
    let hero: Hero = {
      imgSrc: "",
      isPick: false,
      name: "",
      position: namePos
    }
    switch (namePos) {
      case Position.Carry:
        rndHero = randomIntFromInterval(0, carry.length - 1);
        heroName = carry[rndHero];
        hero = {
          name: heroName,
          position: Position.Carry,
          imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
          isPick: true,
        }
        setHero(prev => [...prev, hero]);
        formChecks.setDefault(namePos);
        break;
      case Position.HardLane:
        rndHero = randomIntFromInterval(0, offlaner.length - 1);
        heroName = offlaner[rndHero];
        hero = {
          name: heroName,
          position: Position.HardLane,
          imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
          isPick: true,
        }
        setHero(prev => [...prev, hero]);
        formChecks.setDefault(namePos);
        break;
      case Position.HardSupport:
        rndHero = randomIntFromInterval(0, hard_support.length - 1);
        heroName = hard_support[rndHero];
        hero = {
          name: heroName,
          position: Position.HardSupport,
          imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
          isPick: true,
        }
        setHero(prev => [...prev, hero]);
        formChecks.setDefault(namePos);
        break;
      case Position.MidLane:
        rndHero = randomIntFromInterval(0, midlaner.length - 1);
        heroName = midlaner[rndHero];
        hero = {
          name: heroName,
          position: Position.MidLane,
          imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
          isPick: true,
        }
        setHero(prev => [...prev, hero]);
        formChecks.setDefault(namePos);
        break;
      case Position.SoftSupport:
        rndHero = randomIntFromInterval(0, soft_support.length - 1);
        heroName = soft_support[rndHero];
        hero = {
          name: heroName,
          position: Position.SoftSupport,
          imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
          isPick: true,
        }
        setHero(prev => [...prev, hero]);
        formChecks.setDefault(namePos);
        break;
    }

    setCurrHero(hero)
  }

  const clearHero = () => {
    setHero([] as Hero[])
  }

  return (
    <>
      <Container fluid className="md:h-[100vh] h-[200vh] w-[100%] bg-blue-900 px-8 py-20 gap-2 
                          bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hTnQKM7cWTpuETxqbOBb1wHaEo%26pid%3DApi&f=1&ipt=3f22bd8d48024cbcc22f7424e121b33ebc7d2edbebfdad61ff8439cc486370e5&ipo=images')]
                          "

        >
        <Row className='gap-4'>
          <Col sm={12} md={2} className='h-[50vh] border rounded-lg shadow-lg shadow-red-400'>
            <Row className='text-center '>
              <h1 className='text-2xl text-slate-200 tracking-widest font-extrabold'>ПОЗИЦІЇ</h1>
            </Row>
            <Row className=' py-8 tracking-widest font-bold text-xl text-green-500'>
              <Col className='gap-2 justify-center items-center flex'>
                <FormChecks
                  checks={formChecks.checks}
                />
              </Col>
            </Row>
            <Row className='flex'>
              <H5AudioPlayer
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
              />
              <audio src='http://stream.zeno.fm/71ntub27u18uv' autoPlay={true} preload='auto'>

              </audio>
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
      </Container>
    </>
  )
}

export default App
