import React, { useState} from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { FiInfo } from "react-icons/fi";
import { IoDiceOutline } from "react-icons/io5";
import { FaStopwatch } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiCameraHome } from "react-icons/bi";
import { RiTimer2Fill } from "react-icons/ri";
import styles from "./QuizeSetting.module.css";

const CardList = () => {
  const [diceCounter, setDiceCounter] = useState(0);
  const [timeCounter, setTimeCounter] = useState(0);
  const [checkCounter, setCheckCounter] = useState(0);
  const [durationCounter, setDurationCounter] = useState(0);
  const [switchStatus, setSwitchStatus] = useState(false);

  const incrementDiceCounter = () => {
    setDiceCounter(diceCounter + 1);
  };

  const decrementDiceCounter = () => {
    if (diceCounter > 0) {
      setDiceCounter(diceCounter - 1);
    }
  };


  const incrementTimeCounter = () => {
    setTimeCounter(timeCounter + 5);
  };

  const decrementTimeCounter = () => {
    if (timeCounter > 0) {
      setTimeCounter(timeCounter - 5);
    }
  };

  const incrementCheckCounter = () => {
    if (checkCounter < 100) {
      setCheckCounter(checkCounter + 10);
    }
  };

  const decrementCheckCounter = () => {
    if (checkCounter > 0) {
      setCheckCounter(checkCounter - 10);
    }
  };

  const toggleSwitch = () => {
    setSwitchStatus(!switchStatus);
  };

  const incrementDurationCounter = () => {
    setDurationCounter(durationCounter + 1);
  };

  const decrementDurationCounter = () => {
    if (durationCounter > 0) {
      setDurationCounter(durationCounter - 1);
    }
  };


  return (
    <div className="card-list-container">
      <Card className="my-4 mx-auto" style={{ maxWidth: "1100px" }}>
        <CardBody>
          <Container>
            <Row noGutters>
              <Col className="my-2">
                <Card className={`${styles.card} h-100 position-relative`}>
                  <IoDiceOutline className={`${styles["dice-icon"]} mx-auto`} size={45} style={{ color: "#2A5F9E", marginTop: "25px" }} />
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={32} color={"gray"} />
                  <CardBody className="text-center">
                    <p className="my-2">Random Questions</p>
                    <div className="d-flex align-items-center justify-content-center">
                      
                      <Button className={`${styles["counter-button"]} btn btn-secondary`} onClick={decrementDiceCounter}>-</Button>
                      <span className={`${styles["counter-value"]} me-2`} style={{ width: "79px", height: "14px" }}>{diceCounter}</span>
                      <Button className={`${styles["counter-button"]} btn btn-secondary`} onClick={incrementDiceCounter}>+</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="my-2">
                <Card className={`${styles.card} h-100 position-relative`}>
                  <FaStopwatch className={`${styles["dice-icon"]} mx-auto`} size={45} style={{ color: "#FF964E", marginTop: "25px" }} />
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={32} color={"gray"} />
                  <CardBody className="text-center">
                    <p className="my-2">Time per question</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button className={`${styles["counter-button"]} btn btn-secondary`} onClick={decrementTimeCounter}>-</Button>
                      <span className={`${styles["counter-value"]} me-2`} style={{ width: "79px", height: "14px" }}>{timeCounter}s</span>
                      <Button className={`${styles["counter-button"]} btn btn-secondary`} onClick={incrementTimeCounter}>+</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="my-2">
                <Card className={`${styles.card} h-100 position-relative`}>
                  <AiFillCheckCircle className={`${styles["dice-icon"]} mx-auto`} size={45} style={{ color: "#47CA5B", marginTop: "25px" }} />
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={32} color={"gray"} />
                  <CardBody className="text-center">
                    <p className="my-2">Passing score</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button className={`${styles["counter-button"]} btn btn-secondary`} onClick={decrementCheckCounter}>-</Button>
                      <span className={`${styles["counter-value"]} me-2`} style={{ width: "79px", height: "14px" }}>{checkCounter}%</span>
                      <Button className={`${styles["counter-button"]} btn btn-secondary`} onClick={incrementCheckCounter}>+</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="my-2">
                <Card className={`${styles.card} h-100 position-relative`}>
                  <BiCameraHome className={`${styles["dice-icon"]} mx-auto`} size={45} style={{ color: "#FF3838", marginTop: "25px" }} />
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={32} color={"gray"} />
                  <CardBody className="text-center">
                    <p className="my-2">Webcam validation</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <label className={`${styles["switch"]}`}>
                        <input type="checkbox" checked={switchStatus} onChange={toggleSwitch} />
                        <span className={`${styles["slider"]}`} />
                      </label>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="my-2">
                <Card className={`${styles.card} h-100 position-relative`}>
                  <RiTimer2Fill className={`${styles["dice-icon"]} mx-auto`} size={45} style={{ color: "#8C2CAE", marginTop: "25px" }} />
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={32} color={"gray"} />
                  <CardBody className="text-center">
                    <p className="my-2">Time expected</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className={`${styles["counter-button"]} btn btn-secondary`} onClick={(decrementDurationCounter)}>-</button>
                      <span className={`${styles["counter-value"]} me-2`} style={{ width: "79px", height: "14px" }}>{durationCounter}min</span>
                      <button className={`${styles["counter-button"]} btn btn-secondary`} onClick={(incrementDurationCounter)}>+</button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
          
              {/* <Col className="my-2">
                <Card style={{ width: "176px", height: "156px" }} className="h-100 position-relative">
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={24} color={"gray"} />
                  <CardBody>Card 5</CardBody>
                </Card>
              </Col>
              <Col className="my-2">
                <Card style={{ width: "176px", height: "156px" }} className="h-100 position-relative">
                  <FiInfo className={`${styles["info-icon"]} position-absolute top-0 end-0 p-2`} size={24} color={"gray"} />
                  <CardBody>Card 6</CardBody>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardList;
