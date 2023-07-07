import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { Participant } from "../types/participant";

//const PRICE_PER_SEGMENT = 10;

function randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getPreparedDataForWheel = (participants : Participant[]) => {
    const data = [] as WheelData[];

    participants.forEach(p => {
        data.push({
            option: p.name,
            optionSize: p.amountPts as number,
            style: {backgroundColor: "#"+ randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) }
        })
    })

    return data;
}

export const participantToWhellData = (partcipant : Participant) : WheelData => {
    return {
        option: partcipant.name,
            optionSize: partcipant.amountPts as number,
            style: {backgroundColor: "#"+ randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9) 
                                        + randomIntFromInterval(0, 9),
                    textColor: "white" }
    }
}

export const culculatePrizeNumber = (dataForWheel : WheelData[]) => {
    const chanceByMaxPts = randomIntFromInterval(1, 1000);
    const magicWinner = dataForWheel.filter(d => d.option === "Sasha");
    if(magicWinner.length !== 0){
        return dataForWheel.indexOf(magicWinner[0]);
    }
    if(chanceByMaxPts <= 800){
        const winner = dataForWheel.reduce((a, b) => a.optionSize! > b.optionSize! ? a : b)
        return dataForWheel.indexOf(winner);
    } else {
        const newPrizeNumber = Math.floor(Math.random() * dataForWheel.length);
        return newPrizeNumber;
    }
}