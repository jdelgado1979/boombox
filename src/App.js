import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { bankOne } from './data.js';
import { bankTwo } from './data.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Ratio from 'react-bootstrap/Ratio';
import Form from 'react-bootstrap/Form';

export default function App() {
  const [panel, setPanel] = useState('');
  const [value, setValue] = useState(0);
  const [power, setPower] = useState(false);
  const [bankChange, setBankChange] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const audio = useRef(null);

  const handleToggle1 = () => {
    setPower(!power);
    setPanel('');
    setDisabled(!disabled);
  };

  const handleToggle2 = () => setBankChange(!bankChange);

  function handleClick(e) {
    var result;
    if (power) {
      result = bankOne.find((item) => item.keyTrigger === e.target.innerText);
      if (bankChange) {
        result = bankTwo.find((item) => item.keyTrigger === e.target.innerText);
      }
      let obj = new Audio(result.url);
      obj.play();
      obj.volume = value;
      setPanel(result.id);
    } else return;
  }

  function handleVolume(e) {
    if (power) {
      var range = e.target.value;
      range = parseInt(range);
      range = (range / 100).toFixed(2);
      audio.current.volume = setValue(range);
      setPanel('Volume: ' + e.target.value);
    } else return;
  }

  return (
    <Container className="boombox my-5 mx-5">
      <Row>
        <Badge
          className="badge"
          pill
          as={Col}
          bg="light"
          text="dark"
          size="xxsm"
        >
          BoomBox
        </Badge>
        {''}
      </Row>

      <Row>
        <Col>
          <Ratio aspectRatio={33}>
            <Row>
              <Button
                id="0"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                Q
              </Button>
              <Button
                id="1"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                W
              </Button>
              <Button
                id="2"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                E
              </Button>
            </Row>
          </Ratio>

          <Ratio aspectRatio={33}>
            <Row>
              <Button
                id="3"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                A
              </Button>
              <Button
                id="4"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                S
              </Button>
              <Button
                id="5"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                D
              </Button>
            </Row>
          </Ratio>

          <Ratio aspectRatio={33}>
            <Row>
              <Button
                id="6"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                Z
              </Button>
              <Button
                id="7"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                X
              </Button>
              <Button
                id="8"
                className="btn"
                onClick={handleClick}
                as={Col}
                variant="custom"
                type="button"
                size="lg"
                disabled={disabled}
              >
                C
              </Button>
            </Row>
          </Ratio>
        </Col>

        <Col>
          <Ratio aspectRatio={25}>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Power"
                checked={power}
                onChange={handleToggle1}
              />
            </Form>
          </Ratio>

          <Ratio aspectRatio={22}>
            <div onClick={handleClick} className="Panel">
              {panel}
            </div>
          </Ratio>

          <Ratio aspectRatio={33}>
            <Form>
              <Form.Label></Form.Label>
              <Form.Range
                disabled={disabled}
                defaultValue={0}
                ref={audio}
                onChange={handleVolume}
              />
            </Form>
          </Ratio>

          <Ratio aspectRatio={22}>
            <Form>
              <Form.Check
                disabled={disabled}
                type="switch"
                id="custom-switch"
                label="Bank"
                checked={bankChange}
                onChange={handleToggle2}
              />
            </Form>
          </Ratio>
        </Col>
      </Row>
    </Container>
  );
}
