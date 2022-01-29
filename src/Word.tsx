import React from "react";
import "./word.css";

type Props = {
  word: string;
};

export const Word: React.FC<Props> = ({ word }) => {
  return (
    <div style={{ display: "flex" }}>
      {word.split("").map((char, i) => {
        return (
          <div className="wordbox" key={i}>
            <span className="char">{char.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
};
