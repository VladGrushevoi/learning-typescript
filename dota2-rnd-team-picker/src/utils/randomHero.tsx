import { carry, hard_support, midlaner, offlaner, soft_support } from "../data/heros";
import { CheckInfo } from "../hooks/useCheck";
import { Hero } from "../types/hero";
import { Position } from "../types/positionEnum";
import { randomIntFromInterval } from "./randomFromInterval";

export const randomHero = (
    formChecks: {checks: CheckInfo[], setDefault: (name: string) => void}
) => {
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
          //setHero(prev => [...prev, hero]);
          formChecks.setDefault(namePos);
          return hero;
        case Position.HardLane:
          rndHero = randomIntFromInterval(0, offlaner.length - 1);
          heroName = offlaner[rndHero];
          hero = {
            name: heroName,
            position: Position.HardLane,
            imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
            isPick: true,
          }
          //setHero(prev => [...prev, hero]);
          formChecks.setDefault(namePos);
          return hero;
        case Position.HardSupport:
          rndHero = randomIntFromInterval(0, hard_support.length - 1);
          heroName = hard_support[rndHero];
          hero = {
            name: heroName,
            position: Position.HardSupport,
            imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
            isPick: true,
          }
          //setHero(prev => [...prev, hero]);
          formChecks.setDefault(namePos);
          return hero;
        case Position.MidLane:
          rndHero = randomIntFromInterval(0, midlaner.length - 1);
          heroName = midlaner[rndHero];
          hero = {
            name: heroName,
            position: Position.MidLane,
            imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
            isPick: true,
          }
          //setHero(prev => [...prev, hero]);
          formChecks.setDefault(namePos);
          return hero;
        case Position.SoftSupport:
          rndHero = randomIntFromInterval(0, soft_support.length - 1);
          heroName = soft_support[rndHero];
          hero = {
            name: heroName,
            position: Position.SoftSupport,
            imgSrc: `https://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_full.png`,
            isPick: true,
          }
          //setHero(prev => [...prev, hero]);
          formChecks.setDefault(namePos);
          return hero;
      }
}