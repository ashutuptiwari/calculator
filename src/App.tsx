import Button from "./Components/Button";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nstring, SetString] = useState("");
  const HandleClick = (v: string) => {
    SetString(nstring + v);
    console.log(v);
  };
  const HandleClearClick = () => {
    SetString("");
  };
  useEffect(() => {
    console.log(nstring); // This will log the updated value of nstring
  }, [nstring]);
  const HandleEqualsClick = () => {
    try {
      let result = eval(nstring);
      if (result.toString() == "Infinity") SetString("TERI MAA KI CHUT");
      else if (result.toString() == "NaN") SetString("BHAG BHOSDHIKE");
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
      <h1>CALCULATOR</h1>

      <div id="container">
        <div id="screen">
          <p>{nstring}</p>
        </div>

        <div id="sub-cont">
          <Button
            bvalue="+"
            onClick={() => {
              HandleClick("+");
            }}
          />
          <Button
            bvalue="-"
            onClick={() => {
              HandleClick("-");
            }}
          />
          <Button
            bvalue="*"
            onClick={() => {
              HandleClick("*");
            }}
          />
          <Button
            bvalue="Del"
            onClick={() => {
              HandleDel();
            }}
          />
        </div>

        <div id="sub-cont">
          <Button
            bvalue="1"
            onClick={() => {
              HandleClick("1");
            }}
          />
          <Button
            bvalue="2"
            onClick={() => {
              HandleClick("2");
            }}
          />
          <Button
            bvalue="3"
            onClick={() => {
              HandleClick("3");
            }}
          />
          <Button
            bvalue="%"
            onClick={() => {
              HandleClick("%");
            }}
          />
        </div>

        <div id="sub-cont">
          <Button
            bvalue="4"
            onClick={() => {
              HandleClick("4");
            }}
          />
          <Button
            bvalue="5"
            onClick={() => {
              HandleClick("5");
            }}
          />
          <Button
            bvalue="6"
            onClick={() => {
              HandleClick("6");
            }}
          />
          <Button
            bvalue="^"
            onClick={() => {
              HandleClick("**");
            }}
          />
        </div>

        <div id="sub-cont">
          <Button
            bvalue="7"
            onClick={() => {
              HandleClick("7");
            }}
          />
          <Button
            bvalue="8"
            onClick={() => {
              HandleClick("8");
            }}
          />
          <Button
            bvalue="9"
            onClick={() => {
              HandleClick("9");
            }}
          />
          <Button
            bvalue="/"
            onClick={() => {
              HandleClick("/");
            }}
          />
        </div>

        <div id="sub-cont">
          <Button
            bvalue="0"
            onClick={() => {
              HandleClick("0");
            }}
          />
          <Button
            bvalue="AC"
            onClick={() => {
              HandleClearClick();
            }}
          />
          <Button
            bvalue="="
            onClick={() => {
              HandleEqualsClick();
            }}
          />
          <Button
            bvalue="."
            onClick={() => {
              HandleClick(".");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
