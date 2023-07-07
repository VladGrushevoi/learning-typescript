import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap"
import { Wheel } from "react-custom-roulette";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { culculatePrizeNumber } from "../utils/prepareDataForWheel";

interface SpinWheelProps {
  dataForWheel: WheelData[],
  setDefaultParticipant: () => void,
}

export const SpinWheel = ({ dataForWheel, setDefaultParticipant }: SpinWheelProps) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showWinner, setShowWinner] = useState(false)
  const [oldWinner, setOldWinner] = useState({} as WheelData)
  const handleSpinClick = () => {
    const prizeNumber = culculatePrizeNumber(dataForWheel);
    setPrizeNumber(prizeNumber);
    setMustSpin(true);
    setShowWinner(false)
  };

  return (
    <>
      <Row md={10} className='px-56 pt-4'>
        <Col className=" pb-20">
          {
            dataForWheel.length !== 0 ?
              (
                <>
                  <Wheel
                    mustStartSpinning={mustSpin}
                    spinDuration={0.4}
                    prizeNumber={prizeNumber}
                    data={dataForWheel}
                    outerBorderColor={"#ccc"}
                    outerBorderWidth={9}
                    innerBorderColor={"#f2f2f2"}
                    radiusLineColor={"tranparent"}
                    radiusLineWidth={1}
                    textDistance={55}
                    fontSize={15}
                    onStopSpinning={() => {
                      setMustSpin(false);
                      setShowWinner(true);
                      setOldWinner(dataForWheel[prizeNumber])
                      setDefaultParticipant();
                    }}
                  />
                </>
              ) :
              (
                <>
                 <Wheel
                    mustStartSpinning={mustSpin}
                    spinDuration={0.2}
                    prizeNumber={prizeNumber}
                    data={[{option:"", optionSize: 100, style:{backgroundColor: "white"}}]}
                    outerBorderColor={"#ccc"}
                    outerBorderWidth={9}
                    innerBorderColor={"#f2f2f2"}
                    radiusLineColor={"tranparent"}
                    radiusLineWidth={1}
                    textDistance={55}
                    fontSize={10}
                    onStopSpinning={() => {
                      setMustSpin(false);
                      setShowWinner(true);
                      setOldWinner(dataForWheel[prizeNumber])
                      setDefaultParticipant();
                    }}
                  />
                </>
              )
          }
          <Button 
            className="absolute bottom-[61%] left-[52.5%] py-4 z-10 rounded-circle bg-white text-black"
            onClick={handleSpinClick}  
          >
              Крутити
          </Button>
          {
            !showWinner ? (
            <>
              <Col className="font-bold text-2xl text-white ml-40 pt-2">КРУЧУ...</Col>
            </>
            ) 
            :
            (
              <>
                <Col className="font-bold text-2xl text-white ml-16 pt-2">ВИГРАВ УЧАСНИК: {oldWinner.option?.toUpperCase()}</Col>
              </>
            )
          }
        </Col>
      </Row>
    </>
  )
}