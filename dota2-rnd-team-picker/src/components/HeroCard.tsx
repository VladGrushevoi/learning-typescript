import { Card } from "react-bootstrap"
import { Hero } from "../types/hero"

interface HeroCardProps {
    currHero: Hero,
}

export const HeroCard = ({ currHero }: HeroCardProps) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='m-auto px-0'>
                <Card.Img
                    variant="top"
                    src={currHero.name ?
                        currHero.imgSrc!
                        :
                        `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.cloudflare.steamstatic.com%2Fapps%2Fdota2%2Fimages%2Fdota2_social.jpg&f=1&nofb=1&ipt=a86aa2766cff2cc8ff6edaf63a42452d4acaaa71939cdf0019535fc54e24bd23&ipo=images`}

                />
                <Card.Body>
                    <Card.Title>{currHero.name ? currHero.name : "DOTA 2"}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}