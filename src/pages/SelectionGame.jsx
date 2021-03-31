import React from "react";
import Button from "../components/ButtonImg";
import Title from "../components/Title";

function SelectionGame() {
  return (
    <>
    <Title />
        <Button
          txt={"Play Computer"}
          subTxt={"Play with Computer bot"}
          color="white"
          mt="10"
          page="/round"
        />

        <Button
          txt={"2 Player"}
          subTxt={"Play with Computer bot"}
          color="blue"
          page="/comingsoon"
        />
    </>
  );
}

export default SelectionGame;
