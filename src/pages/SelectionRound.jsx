import React from "react";
import Title from "../components/Title";
import Circle from "../components/Circle";

function SelectionRound() {
  return (
    <>
      <Title />
      <div className="text-center">
        <h1 className="mt-8 white">How many rounds do you want ?</h1>
        <Circle numbers={1} />
        <Circle numbers={3} />
        <Circle numbers={"~"} />
      </div>
    </>
  );
}

export default SelectionRound;
