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
    const totalSum = dataForWheel.map(i => i.optionSize).reduce((prev, next) => Number.parseInt(prev!.toString()) + Number.parseInt(next!.toString()));
    const magicWinner = dataForWheel.filter(d => d.option === "Владислав Г.");
    if(magicWinner.length !== 0){
        return dataForWheel.indexOf(magicWinner[0]);
    }
    if(chanceByMaxPts <= 800){
        // const winner = dataForWheel.reduce((a, b) => a.optionSize! > b.optionSize! ? a : b)
        // return dataForWheel.indexOf(winner);
        const winnerNumber = randomIntFromInterval(1, totalSum!);
        let tempSum = 0;

        console.log(totalSum, "TOTAL_SUM");
        console.log(winnerNumber, "WINNER_NUMBER");

        const winner = dataForWheel.map(i => {
            console.log(tempSum, "ITER_SUM")
            tempSum += Number.parseInt(i.optionSize!.toString());
            console.log(i, "ITER")
            if((Number.parseInt(tempSum.toString()) - Number.parseInt(i.optionSize!.toString())) <= winnerNumber && winnerNumber <= tempSum){
                return i;
            }
        }).filter(i => i !== undefined)
        console.log(winner)
        const result = dataForWheel.indexOf(winner[0]!);
        console.log(result, "RESULT") 
        return result

    } else {
        const newPrizeNumber = Math.floor(Math.random() * dataForWheel.length);
        return newPrizeNumber;
    }
}