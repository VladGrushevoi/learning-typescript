import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap"
import { Wheel } from "react-custom-roulette";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { culculatePrizeNumber } from "../utils/prepareDataForWheel";
import { Timer } from "./Timer";

interface SpinWheelProps {
  dataForWheel: WheelData[],
  setDefaultParticipant: () => void,
}

export const SpinWheel = ({ dataForWheel, setDefaultParticipant }: SpinWheelProps) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showWinner, setShowWinner] = useState(false)
  const [showSpinnerInfo, setSpinnerInfo]= useState(false);
  const [oldWinner, setOldWinner] = useState({} as WheelData)
  const totalBank = dataForWheel.length !== 0 ? 
                    dataForWheel.map(i => i.optionSize).reduce((prev, next) => Number.parseFloat(prev!.toString()) + Number.parseFloat(next!.toString())) 
                    : 0;
  const handleSpinClick = () => {
    const prizeNumber = culculatePrizeNumber(dataForWheel);
    setPrizeNumber(prizeNumber)
    setSpinnerInfo(true)
    setMustSpin(true);
    setShowWinner(false)
  };

  const handleClear = () => {
    setDefaultParticipant();
    setShowWinner(false);
    setMustSpin(false);
    setOldWinner({});
  }

  return (
    <>
      <Row className='justify-center items-center'>
        <Col md={3}></Col>
        <Col md={6} className="">
          {
            dataForWheel.length !== 0 ?
              (
                <>
                  <Wheel
                    mustStartSpinning={mustSpin}
                    spinDuration={0.6}
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
                      setSpinnerInfo(false)
                      setOldWinner(dataForWheel[prizeNumber])
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
                    }}
                  />
                </>
              )
          }
          {/* <Button 
            className="absolute inline-block top-[25%] left-[57%] rounded-circle py-4  z-10 bg-white text-black font-bold"
            onClick={handleSpinClick}  
          >
              ГРАТИ
          </Button> */}
        </Col>
        <Col md={3} className="items-start mb-56 text-white text-2xl">
          <Timer play={handleSpinClick} dataForWheel={dataForWheel}/>
        </Col>
        <Col>
          {
            showSpinnerInfo && (
            <>
              <Col className="font-bold text-2xl text-white pl-52">КРУЧУ...</Col>
            </>
            )
          }
          {
            showWinner && (
              <>
                <Row className="my-4 pl-44">
                  <Col className="font-bold text-2xl text-yellow-500">ВИГРАВ УЧАСНИК: {oldWinner.option}</Col>
                  <Col className="font-bold text-2xl text-yellow-500">СУМА ВИГРАШУ: <br></br> {(totalBank! * 0.9).toFixed().toString()} pts</Col>
                  <Col md={5}><Button className="" onClick={handleClear}>ОЧИСТИТИ</Button></Col>
                </Row>
              </>
            )
          }
        </Col>
      </Row>
    </>
  )
}