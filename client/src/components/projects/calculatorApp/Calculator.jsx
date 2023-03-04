import React, { useState, useEffect } from "react";
import "./calculator.css";

const Calculator = () => {
  const [prevDisplay, setPrevDisplay] = useState(`\u00A0`);
  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [operation, setOperation] = useState({
    name: "",
    value: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [firstNumber, setFirstNumber] = useState();

  useEffect(() => {
    if (!isFinite(currentDisplay) || isNaN(currentDisplay)) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [currentDisplay]);

  const calculate = (selectedOperation) => {
    const result = eval(firstNumber + operation.name + currentDisplay);
    setPrevDisplay(firstNumber + operation.name + currentDisplay);
    if (selectedOperation) {
      setOperation(selectedOperation);
    } else {
      setOperation({
        name: "",
        value: "",
      });
    }
    return result;
  };

  const onClickCalculate = () => {
    if (!operation?.name) {
      return;
    }
    const result = calculate();
    setCurrentDisplay(result);
  };

  const onClickNumber = (e) => {
    const clickedButon = e.target.name;
    let number = 0;

    if (!isFinite(currentDisplay) || isNaN(currentDisplay)) {
      onClickClear();
      number = clickedButon;
    } else {
      number = currentDisplay.concat(clickedButon);
    }

    if (number[0] === "0" && number.length > 1) {
      number = number.substring(1);
    }

    if (number.length > 14) {
      return;
    }

    setCurrentDisplay(number);
  };

  const onClickOperation = (e) => {
    const selectedOperation = {
      name: e.target.name,
      value: e.target.value,
    };

    if (!currentDisplay) {
      setOperation(selectedOperation);
      return;
    }

    if (currentDisplay && firstNumber && operation.name) {
      const result = calculate(selectedOperation);
      setPrevDisplay(result);
      setFirstNumber(result);
      setCurrentDisplay("");
      return;
    }

    setOperation(selectedOperation);
    setFirstNumber(currentDisplay);
    setPrevDisplay(currentDisplay);
    setCurrentDisplay("");
  };

  const onClickClear = (e) => {
    setOperation("");
    setPrevDisplay(`\u00A0`);
    setCurrentDisplay("0");
  };

  const onClickSwitch = () => {
    if (!currentDisplay) {
      return;
    }
    setCurrentDisplay(currentDisplay * -1);
  };

  const onClickDelete = (e) => {
    setCurrentDisplay(currentDisplay.slice(0, -1));
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="container">
        <div className="calculatorWrap">
          <div className="display">
            <div className="prevDisplay">
              {prevDisplay}
              {operation.value}
            </div>
            <div className="currentDisplay">{currentDisplay}</div>
          </div>
          <div className="keypad">
            <div className="row">
              <button
                className="col"
                name="%"
                value="%"
                onClick={onClickOperation}
                disabled={buttonDisable}
              >
                %
              </button>
              <button className="col" onClick={onClickClear}>
                C
              </button>
              <button
                className="col"
                onClick={onClickDelete}
                disabled={buttonDisable}
              >
                DEL
              </button>
              <button
                className="col"
                name="/"
                value="&divide;"
                onClick={onClickOperation}
                disabled={buttonDisable}
              >
                &divide;
              </button>
            </div>
            <div className="row">
              <button className="col" name="7" onClick={onClickNumber}>
                7
              </button>
              <button className="col" name="8" onClick={onClickNumber}>
                8
              </button>
              <button className="col" name="9" onClick={onClickNumber}>
                9
              </button>
              <button
                className="col"
                name="*"
                value="&times;"
                onClick={onClickOperation}
                disabled={buttonDisable}
              >
                &times;
              </button>
            </div>
            <div className="row">
              <button className="col" name="4" onClick={onClickNumber}>
                4
              </button>
              <button className="col" name="5" onClick={onClickNumber}>
                5
              </button>
              <button className="col" name="6" onClick={onClickNumber}>
                6
              </button>
              <button
                className="col"
                name="-"
                value="-"
                onClick={onClickOperation}
                disabled={buttonDisable}
              >
                -
              </button>
            </div>
            <div className="row">
              <button className="col" name="1" onClick={onClickNumber}>
                1
              </button>
              <button className="col" name="2" onClick={onClickNumber}>
                2
              </button>
              <button className="col" name="3" onClick={onClickNumber}>
                3
              </button>
              <button
                className="col"
                name="+"
                value="+"
                onClick={onClickOperation}
                disabled={buttonDisable}
              >
                +
              </button>
            </div>
            <div className="row">
              <button
                className="col"
                name="switch"
                onClick={onClickSwitch}
                disabled={buttonDisable}
              >
                +/-
              </button>
              <button className="col" name="0" onClick={onClickNumber}>
                0
              </button>
              <button
                className="col"
                name="."
                onClick={onClickNumber}
                disabled={buttonDisable}
              >
                .
              </button>
              <button
                className="col"
                name="="
                onClick={onClickCalculate}
                disabled={buttonDisable}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
