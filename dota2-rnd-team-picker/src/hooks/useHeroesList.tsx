import { useState } from "react"
import { Hero } from "../types/hero"

export const useHeroesList = () => {
    const [heroes, setHero] = useState([] as Hero[])

    const addNewHeroToList = (hero: Hero) => {
        setHero(prev => [...prev, hero])
    }
    const setShowAnimationToFalse = () => {
        setHero(prev => {
            const oldHeroes = [...prev].map(i => {
              i.isAnimated = false;
              return i;
            });
            return oldHeroes;
          })
    }

    const clearHeroesList = () => {
        setHero([] as Hero[])
    }

    const setLastHeroAnimationTrue = () => {
        setHero(prev => {
            const oldHeroes = [...prev].map((i, index) => {
              if (index === prev.length - 1) {
                i.isAnimated = true;
              }
              return i;
            });
            return oldHeroes;
          })
    }
    return {
        heroes,
        addNewHeroToList,
        setShowAnimationToFalse,
        clearHeroesList,
        setLastHeroAnimationTrue
    }
}