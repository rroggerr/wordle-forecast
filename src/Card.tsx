import React from "react";
import { getWord } from "./getWord";
import { Word } from "./Word";

const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  i: number;
  today: Date;
};

export const Card: React.FC<Props> = ({ i, today }) => {
  const offset = i - 2;
  const date = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
  const [show, setShow] = React.useState(
    Number(date) + 23 * 60 * 60 * 1000 < Number(new Date())
  );
  return (
    <div
      key={i}
      className="card"
      tabIndex={i + 1}
      onClick={() => setShow(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter") setShow(true);
      }}
    >
      <div className="dateBox">
        <span className="dateText">{`${
          date.getMonth() + 1
        }/${date.getDate()}`}</span>
        <span>{WEEK[date.getDay()]}</span>
      </div>
      {show ? (
        <Word word={getWord(date)} hasAnimation />
      ) : (
        <div className="reveal">Click to reveal</div>
      )}
    </div>
  );
};
