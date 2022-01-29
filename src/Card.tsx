import React from "react";
import { getWord } from "./getWord";
import { Word } from "./Word";

const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  i: number;
};

const today = new Date();

export const Card: React.FC<Props> = ({ i }) => {
  const offset = i - 1;
  const date = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
  const [show, setShow] = React.useState(date < new Date());
  return (
    <div key={i} className="card">
      <div className="dateBox">
        <span className="dateText">{`${
          date.getMonth() + 1
        }/${date.getDate()}`}</span>
        <span>{WEEK[date.getDay()]}</span>
      </div>
      {show ? (
        <Word word={getWord(date)} />
      ) : (
        <div className="reveal" role="button" onClick={() => setShow(true)}>
          Click to reveal
        </div>
      )}
    </div>
  );
};
