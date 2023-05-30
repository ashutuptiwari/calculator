import Button from "./Components/Button";
import Screen from "./Components/Screen";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nstring, SetString] = useState("");

  const buttons = [
    { value: "+", onClick: () => HandleClick("+") },
    { value: "-", onClick: () => HandleClick("-") },
    { value: "*", onClick: () => HandleClick("*") },
    { value: "Del", onClick: () => HandleDel() },
    { value: "1", onClick: () => HandleClick("1") },
    { value: "2", onClick: () => HandleClick("2") },
    { value: "3", onClick: () => HandleClick("3") },
    { value: "%", onClick: () => HandleClick("%") },
    { value: "4", onClick: () => HandleClick("4") },
    { value: "5", onClick: () => HandleClick("5") },
    { value: "6", onClick: () => HandleClick("6") },
    { value: "^", onClick: () => HandleClick("**") },
    { value: "7", onClick: () => HandleClick("7") },
    { value: "8", onClick: () => HandleClick("8") },
    { value: "9", onClick: () => HandleClick("9") },
    { value: "/", onClick: () => HandleClick("/") },
    { value: "0", onClick: () => HandleClick("0") },
    { value: "AC", onClick: () => HandleClearClick() },
    { value: "=", onClick: () => HandleEqualsClick() },
    { value: ".", onClick: () => HandleClick(".") },
  ];

  const HandleClick = (v: string) => {
    SetString(nstring + v);
    console.log(v);
  };

  const HandleClearClick = () => {
    SetString("");
  };

  useEffect(() => {
    console.log(nstring);
  }, [nstring]);

  const HandleEqualsClick = () => {
    try {
      let result = eval(nstring);
      if (result.toString() === "Infinity" ||result.toString()=== "-Infinity")
        SetString("TERI MAA KI CHU");
      else if (result.toString() === "NaN") SetString("BHAG BHOSDHIKE");
      else SetString(result.toString());

      console.log(result);
    } catch (error) {
      SetString("CHUTIYA HAI KYA?");
    }
  };

  const HandleDel = () => {
    SetString(nstring.slice(0, -1));
    console.log(nstring);
  };

  return (
    <div id="body">
      <h1> EXPLICIT CALCULATOR</h1>

      <div id="container">
        <Screen nstring={nstring} />

        <div id="sub-cont">
          {buttons.slice(0, 4).map((button, index) => (
            <Button
              key={index}
              bvalue={button.value}
              onClick={button.onClick}
            />
          ))}
        </div>
        <div id="sub-cont">
          {buttons.slice(4, 8).map((button, index) => (
            <Button
              key={index}
              bvalue={button.value}
              onClick={button.onClick}
            />
          ))}
        </div>
        <div id="sub-cont">
          {buttons.slice(8, 12).map((button, index) => (
            <Button
              key={index}
              bvalue={button.value}
              onClick={button.onClick}
            />
          ))}
        </div>
        <div id="sub-cont">
          {buttons.slice(12, 16).map((button, index) => (
            <Button
              key={index}
              bvalue={button.value}
              onClick={button.onClick}
            />
          ))}
        </div>
        <div id="sub-cont">
          {buttons.slice(16, 20).map((button, index) => (
            <Button
              key={index}
              bvalue={button.value}
              onClick={button.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
