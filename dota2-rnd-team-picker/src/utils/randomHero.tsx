import { carry, fixImageName, hard_support, midlaner, offlaner, soft_support } from "../data/heros";
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
    let heroImageOther = "";
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
          heroImageOther = fixImageName[heroName] ? fixImageName[heroName] : heroName;
          heroImageOther.split(" ").join("_").toLowerCase();
          hero = {
            name: heroName.split("_").join(" ").toUpperCase(),
            position: Position.Carry,
            imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageOther.toLowerCase()}.png`,
            isPick: true,
          }
          formChecks.setDefault(namePos);
          return hero;
        case Position.HardLane:
          rndHero = randomIntFromInterval(0, offlaner.length - 1);
          heroName = offlaner[rndHero];
          heroImageOther = fixImageName[heroName] ? fixImageName[heroName] : heroName;
          heroImageOther.split(" ").join("_").toLowerCase();
          hero = {
            name: heroName.split("_").join(" ").toUpperCase(),
            position: Position.HardLane,
            imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageOther}.png`,
            isPick: true,
          }
          formChecks.setDefault(namePos);
          return hero;
        case Position.HardSupport:
          rndHero = randomIntFromInterval(0, hard_support.length - 1);
          heroName = hard_support[rndHero];
          heroImageOther = fixImageName[heroName] ? fixImageName[heroName] : heroName;
          heroImageOther.split(" ").join("_").toLowerCase();
          hero = {
            name: heroName.split("_").join(" ").toUpperCase(),
            position: Position.HardSupport,
            imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageOther}.png`,
            isPick: true,
          }
          formChecks.setDefault(namePos);
          return hero;
        case Position.MidLane:
          rndHero = randomIntFromInterval(0, midlaner.length - 1);
          heroName = midlaner[rndHero];
          heroImageOther = fixImageName[heroName] ? fixImageName[heroName] : heroName;
          heroImageOther.split(" ").join("_").toLowerCase();
          hero = {
            name: heroName.split("_").join(" ").toUpperCase(),
            position: Position.MidLane,
            imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageOther}.png`,
            isPick: true,
          }
          formChecks.setDefault(namePos);
          return hero;
        case Position.SoftSupport:
          rndHero = randomIntFromInterval(0, soft_support.length - 1);
          heroName = soft_support[rndHero];
          console.log(heroName, "SOFT SUPPORT FROM DATA")
          heroImageOther = fixImageName[heroName] ? fixImageName[heroName] : heroName;
          console.log(heroImageOther, "AND IMAGE")
          heroImageOther.split(" ").join("_").toLowerCase();
          hero = {
            name: heroName.split("_").join(" ").toUpperCase(),
            position: Position.SoftSupport,
            imgSrc: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageOther}.png`,
            isPick: true,
          }
          formChecks.setDefault(namePos);
          return hero;
      }
}