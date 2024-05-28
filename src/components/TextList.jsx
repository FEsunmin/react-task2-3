import React, { useContext } from "react";
import { TextContext } from "../context/Context";

function TextList() {
  const { texts } = useContext(TextContext);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

export default TextList;
