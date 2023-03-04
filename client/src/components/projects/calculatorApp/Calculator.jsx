import React, { useState, useEffect } from "react";
import "./calculator.css";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState(`\u00A0`);

  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [prevDisplay, setPrevDisplay] = useState(`\u00A0`);

  const [operation, setOperation] = useState({
    name: "",
    value: "",
  });

  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    if (!isFinite(currentNumber) || isNaN(currentNumber)) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [currentNumber]);

  const changePrevNumber = (number, equation) => {
    console.log(equation);
    if (equation) {
      setPrevNumber(number);
      setPrevDisplay(equation);
    } else {
      setPrevNumber(number);
      setPrevDisplay(convertNumber(number));
    }
  };

  const changeCurrentNumber = (number) => {
    setCurrentNumber(number);
    setCurrentDisplay(convertNumber(number));
  };

  const convertNumber = (number) => {
    if (isNaN(Number(number)) || number === "\u00A0") {
      console.log("inside not a number");
      return number;
    }

    const stringNumber = number.toString();
    let result = number;
    if (
      stringNumber.includes(".") &&
      !stringNumber.includes("e") &&
      stringNumber.length > 12
    ) {
      const integerLength = stringNumber.split(".")[0].length;

      if (integerLength < 11) {
        return Number(result).toLocaleString("en-US", {
          maximumFractionDigits: 11 - integerLength,
        });
      }
    }
    if (stringNumber.length > 12) {
      return Number(result).toExponential(4);
    }

    let converted = Number(result).toLocaleString("en-US", {
      maximumFractionDigits: 12,
    });

    return converted;
  };

  const calculate = (selectedOperation) => {
    const result = eval(prevNumber + operation.name + currentNumber);

    if (selectedOperation !== "calculate") {
      setOperation(selectedOperation);
      changePrevNumber(result);
    } else {
      setOperation({
        name: "",
        value: "",
      });
      let equation = `${convertNumber(prevNumber)} ${
        operation.value
      } ${convertNumber(currentNumber)} =`;
      changePrevNumber(result, equation);
    }

    return result;
  };

  const onClickCalculate = () => {
    if (!operation.name) {
      changePrevNumber(`\u00A0`);
      return;
    } else if (!currentNumber) {
      changeCurrentNumber(prevNumber);
      changePrevNumber(`\u00A0`);
      setOperation("");
      return;
    }

    const result = calculate("calculate");
    changeCurrentNumber(result);
  };

  const onClickNumber = (e) => {
    const clickedButon = e.target.name;
    let number = 0;

    if (
      !isFinite(currentNumber) ||
      isNaN(currentNumber) ||
      (Number.isInteger(currentNumber) && !operation?.name)
    ) {
      onClickClear();
      changeCurrentNumber(clickedButon);
      return;
    } else {
      number = currentNumber.concat(clickedButon);
    }

    if (number[0] === "0" && number.length > 1) {
      number = number.substring(1);
    }

    if (number.length > 10) {
      return;
    }

    changeCurrentNumber(number);
  };

  const onClickOperation = (e) => {
    const selectedOperation = {
      name: e.target.name,
      value: e.target.value,
    };

    if (!currentNumber) {
      setOperation(selectedOperation);
      return;
    }

    if (currentNumber && prevNumber && operation.name) {
      const result = calculate(selectedOperation);
      changePrevNumber(result);
      changeCurrentNumber("");
      return;
    }

    setOperation(selectedOperation);
    changePrevNumber(currentNumber);
    changeCurrentNumber("");
  };

  const onClickPeriod = () => {
    console.log(currentNumber);
    if (!currentNumber) {
      setCurrentNumber("0.");
      setCurrentDisplay("0.");
    } else if (currentNumber.includes(".")) {
      return;
    } else {
      setCurrentNumber(currentNumber.concat("."));
      setCurrentDisplay(currentNumber.concat("."));
    }
  };

  const onClickClear = (e) => {
    setOperation("");
    changePrevNumber(`\u00A0`);
    changeCurrentNumber("0");
  };

  const onClickSwitch = () => {
    if (!currentNumber) {
      return;
    }
    changeCurrentNumber((currentNumber * -1).toString());
  };

  const onClickDelete = (e) => {
    if (typeof currentNumber === "number") {
      return;
    }
    changeCurrentNumber(currentNumber.slice(0, -1));
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="container">
        <div className="calculatorWrap">
          <div className="display">
            <div className="prevNumber">
              {prevDisplay} {operation.value}
            </div>
            <div className="currentNumber">{currentDisplay}</div>
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
                onClick={onClickPeriod}
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
