import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'react-bootstrap';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

import reproductionArray from "../utils/reproductionArray"
import { randomIntFromInterval } from '../utils/randomFromInterval';
import { CheckInfo } from '../hooks/useCheck';
import { Position } from '../types/positionEnum';
import { carry, hard_support, midlaner, offlaner, soft_support } from '../data/heros';

export interface Prize {
    id: string,
    image: string,
    text: string
}


interface RouletteProps {
    handleSpin: (heroName: string, position: string) => void,
    formChecks: { checks: CheckInfo[], setDefault: (name: string) => void }
}

export const Roulette = ({ handleSpin, formChecks }: RouletteProps) => {
    const settings = {
        type: {
            name: 'Type',
            options: ['horizontal', 'vertical'],
            value: 'horizontal',
        },
        design: {
            name: 'Design',
            options: ['Regular'],
            value: 'Regular',
        },
        prizesWithText: {
            name: 'Prizes with text',
            options: [false, true],
            value: true,
        },
        withoutAnimation: {
            name: 'Without animation',
            options: [false, true],
            value: false,
        },
        hideCenterDelimiter: {
            name: 'Hide center delimiter',
            options: [false, true],
            value: false,
            forDesign: 'Regular',
        },
        soundWhileSpinning: {
            name: 'Sound while spinning',
            options: [false, true],
            value: false,
        },
        stopInCenter: {
            name: 'Stop in the prize item center',
            options: [false, true],
            value: false,
        },
        spinningTime: {
            name: 'Spinning time',
            options: ['3', '5', '10', '15', '20'],
            value: '3',
        },
    };
    const [items, setItems] = useState(carry.map((i, index )=> {
        return {
            id: i + index,
            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${i}.png`,
            text: i
        }
    }) as Prize[])
    const [prizeList, setPrizeList] = useState([] as Prize[]);
    const [start, setStart] = useState(false);
    const [spinning, setSpinning] = useState(false);
    const [prizeIndex, setPrizeIndex] = useState(0);
    const [position, setPosition] = useState("");

    const API = {
        getPrizeIndex: async () => {
            const randomPrizeIndex = randomIntFromInterval(0, items.length - 1);
            const randomPrizeIndexOffset = items.length;

            return randomPrizeIndex + randomPrizeIndexOffset * 4;
        },
    };

    useEffect(() => {
        const reproducedArray = [
            ...items,
            ...reproductionArray(items, items.length * 3),
            ...items,
            ...reproductionArray(items, items.length),
        ];

        const list: Prize[] = [...reproducedArray].map((item) => ({
            ...item,
            id: `${item.id}--${nanoid()}`,
        }));

        setPrizeList(list);
    }, [items]);

    useEffect(() => {
        if (!prizeIndex || start) {
            return;
        }

        setStart(true);
    }, [prizeIndex, start, position]);

    useEffect(() => {
        if (!spinning || !prizeList.length) {
            return;
        }

        const prepare = async () => {
            const newPrizeIndex = await API.getPrizeIndex();
            setPrizeIndex(newPrizeIndex);
            setStart(false);

        };

        prepare();
    }, [spinning, prizeList]);

    const handleStart = () => {
        console.log(formChecks)
        const choisenPos = formChecks.checks.filter(i => i.checked).map(i => i.name);
        const rndPosIndx = randomIntFromInterval(0, choisenPos.length - 1);
        const namePos = choisenPos[rndPosIndx];
        setItems(_ => {
            let heroes = [] as Prize[];
            switch (namePos) {
                case Position.Carry:
                    heroes = carry.map((i, index) => {
                        return {
                            id: i + index,
                            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${i}.png`,
                            text: i
                        }
                    })
                    formChecks.setDefault(namePos)
                    setPosition(namePos)
                    break;
                case Position.HardLane:
                    heroes = offlaner.map((i, index) => {
                        return {
                            id: i + index,
                            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${i}.png`,
                            text: i
                        }
                    })
                    formChecks.setDefault(namePos)
                    setPosition(namePos)
                    break;
                case Position.HardSupport:
                    heroes = hard_support.map((i, index) => {
                        return {
                            id: i + index,
                            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${i}.png`,
                            text: i
                        }
                    })
                    formChecks.setDefault(namePos)
                    setPosition(namePos)
                    break;
                case Position.MidLane:
                    heroes = midlaner.map((i, index) => {
                        return {
                            id: i + index,
                            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${i}.png`,
                            text: i
                        }
                    })
                    formChecks.setDefault(namePos)
                    setPosition(namePos)
                    break;
                case Position.SoftSupport:
                    heroes = soft_support.map((i, index) => {
                        return {
                            id: i + index,
                            image: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${i}.png`,
                            text: i
                        }
                    })
                    formChecks.setDefault(namePos)
                    setPosition(namePos)
                    break;
                default:
                    return []
            }

            return heroes;
        })
        if (items.length === 0) {
            return;
        }
        setSpinning(true);
    };

    const handlePrizeDefined = () => {
        handleSpin(prizeList[prizeIndex].text, position)
        setSpinning(false);
    };

    const stopInCenter = settings.stopInCenter.value;
    const withoutAnimation = settings.withoutAnimation.value;
    const prizesWithText = settings.prizesWithText.value;
    const hideCenterDelimiter = settings.hideCenterDelimiter.value;
    const spinningTime = +settings.spinningTime.value;

    return (
        <div>
            <div className={`roulette horizontal`}>
                <RoulettePro
                    type={'horizontal'}
                    prizes={prizeList}
                    start={start}
                    prizeIndex={prizeIndex}
                    onPrizeDefined={handlePrizeDefined}
                    spinningTime={spinningTime}
                    classes={{
                        wrapper: 'roulette-pro-wrapper-additional-styles',
                    }}
                    options={{ stopInCenter, withoutAnimation }}
                    defaultDesignOptions={{ prizesWithText, hideCenterDelimiter }}
                />
            </div>
            <div className="gray-block text-center">
                <div className="button-wrapper ">
                    <Button onClick={handleStart} className="spin-button bg-orange-500" type="button">
                        Spin
                    </Button>
                </div>
            </div>
        </div>
    );
};
