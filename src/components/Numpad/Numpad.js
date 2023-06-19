import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./numpad.scss";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0];

export const Numpad = (props) => {
  const [numItem, setNumItem] = useState("");
  const [result, setResult] = useState(0);
  const [calculationTrace, setCalculationTrace] = useState("");

  const getNumberItems = (numbers) => {
    setNumItem((prevState) => {
      return prevState.concat(numbers);
    });
    setCalculationTrace((prevState) => {
      return prevState.concat(numbers);
    });
  };

  const operationHandler = (event) => {
    const operator = event.target.value;
    if (numItem) {
      setResult(result + +numItem);
      setCalculationTrace(
        calculationTrace.length > 0
          ? calculationTrace + operator
          : calculationTrace
      );
      setNumItem("");
    }
  };

  const squareRootHandler = () => {
    if (numItem) {
      setNumItem(Math.sqrt(numItem));
      setCalculationTrace(Math.sqrt(numItem));
    }
  };

  const percentHandler = () => {
    if (numItem) {
      setNumItem(numItem / 100);
      setCalculationTrace(numItem / 100);
    }
  };

  const clearHandler = (event) => {
    setNumItem("");
    setCalculationTrace("");
    setResult(0);
  };

  const onCalculateClick = () => {
    if (!isNaN(`${calculationTrace[calculationTrace.length - 1]}`)) {
      const calc = eval(calculationTrace);
      setResult(calc);
      setCalculationTrace(calc.toString());
      setNumItem(calc.toString());
    }
  };

  useEffect(() => {
    props.onGetDisplayNum(calculationTrace);
  }, [calculationTrace, result, numItem, props]);

  return (
    <div className="main-container">
      <div className="control-grid">
        <button type="button" name="sqrtBtn" onClick={squareRootHandler}>
          &#8730;
        </button>
        <button type="button" name="prcntBtn" onClick={percentHandler}>
          &#37;
        </button>
        <button
          type="button"
          name="clrLastBtn"
          onClick={clearHandler}
          value="ce"
        >
          {"CE"}
        </button>
        <button type="button" name="clrBtn" onClick={clearHandler} value="c">
          {"C"}
        </button>
      </div>
      <div className="numpad-container">
        <div className="number-grid">
          {numbers.map((item) => {
            return (
              <Button
                num={item}
                key={Math.random().toString(16).slice(2)}
                getButtonData={getNumberItems}
              />
            );
          })}
          <button type="button" name="resultBtn" onClick={onCalculateClick}>
            &#61;
          </button>
        </div>
        <div className="operation-grid">
          <button
            type="button"
            name="divideBtn"
            onClick={operationHandler}
            value="/"
          >
            &#247;
          </button>
          <button
            type="button"
            name="multiplyBtn"
            onClick={operationHandler}
            value="*"
          >
            &#215;
          </button>
          <button
            type="button"
            name="subtractBtn"
            onClick={operationHandler}
            value="-"
          >
            &#8722;
          </button>
          <button
            type="button"
            name="addBtn"
            onClick={operationHandler}
            value="+"
          >
            &#43;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Numpad;
