export interface Hero {
    name: string | null,
    position: string | null,
    imgSrc: string | null,
    isAnimated: boolean
}

export interface ShortHero {
    name: string | null,
    image: string | null,
    position: string
}