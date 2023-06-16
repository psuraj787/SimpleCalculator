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

  const onAddClick = () => {
    if (numItem) {
      setResult(result + +numItem);
      setCalculationTrace(
        calculationTrace.length > 0 ? calculationTrace + "+" : calculationTrace
      );
      setNumItem("");
    }
  };

  const onCalculateClick = () => {
    if (calculationTrace) {
      const calc = eval(calculationTrace);
      setResult(calc);
      setCalculationTrace(calc.toString());
      setNumItem(calc);
    }
  };

  useEffect(() => {
    props.onGetDisplayNum(calculationTrace);
  }, [calculationTrace, result, numItem, props]);

  return (
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
      <button type="button" name="addBtn" onClick={onAddClick}>
        {'+'}
      </button>
      <button type="button" name="resultBtn" onClick={onCalculateClick}>
        {'='}
      </button>
    </div>
  );
};

export default Numpad;
