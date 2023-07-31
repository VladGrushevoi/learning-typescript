import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Button } from 'react-bootstrap';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

import reproductionArray from "../utils/reproductionArray"
import { randomIntFromInterval } from '../utils/randomFromInterval';

export interface Prize {
    id:string, 
    image: string, 
    text:string
}


interface RouletteProps {
    items: Prize[],
    handleSpin: (prizeIndex: string) => void,
    setNewListHero: () => void,
}

export const Roulette = ({ items, handleSpin, setNewListHero } : RouletteProps) => {
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

  const [prizeList, setPrizeList] = useState([] as Prize[]);
  const [start, setStart] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);

  const API = {
    getPrizeIndex: async () => {
      const randomPrizeIndex = randomIntFromInterval(0, items.length - 1);
      const randomPrizeIndexOffset = items.length * 4;
  
      return randomPrizeIndex + randomPrizeIndexOffset;
    },
  };

  useEffect(() => {
    const reproducedArray = [
      ...items,
      ...reproductionArray(items, items.length * 3),
      ...items,
      ...reproductionArray(items, items.length),
    ];

    const list : Prize[] = [...reproducedArray].map((item) => ({
      ...item,
      id: `${item.id}--${nanoid()}`,
    }));

    setPrizeList(list);
  }, []);

  useEffect(() => {
    if (!prizeIndex || start) {
      return;
    }

    setStart(true);
  }, [prizeIndex, start]);

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
    setNewListHero()
    setSpinning(true);
  };

  const handlePrizeDefined = () => {
    handleSpin(prizeList[prizeIndex].text)
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
            <Button onClick={handleStart} className="spin-button" type="button">
              Spin
            </Button>
          </div>
        </div>
      </div>
  );
};
