import { Col, Row } from "react-bootstrap"
import { Hero } from "../types/hero"

interface HeroesListProps {
    heroes: Hero[]
}

export const HeroesList = ({ heroes }: HeroesListProps) => {

    return (
        <>
            <Row><h1 className='text-2xl text-slate-200 tracking-widest font-extrabold mt-2'>ПІК</h1></Row>
            <Row className='text-gray-200 font-bold text-xl'>
                <Col xs={1} sm={1} md={1}>#</Col>
                <Col xs={3} sm={3} md={3}>Позиція</Col>
                <Col>Герой</Col>
            </Row>
            {
                heroes.map((hero, index) => {
                    return (
                        <Row key={Math.random()} className={`text-gray-200 text-xl ${hero.isAnimated ? 'hero-row-animation' : ''}`}>
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
        </>
    )
}