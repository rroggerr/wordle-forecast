import React from "react";
import { getWord } from "./getWord";
import { Word } from "./Word";

const CARD_WIDTH = 400;
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const styles: Record<string, React.CSSProperties> = {
  card: {
    backgroundColor: "white",
    height: "80px",
    width: `${CARD_WIDTH}px`,
    borderRadius: "12px",
    boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
    padding: "8px",
    margin: `0 0 12px calc((100vw - ${CARD_WIDTH}px) /2)`,
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "center",
  },
  dateText: {
    fontWeight: "900",
    fontSize: "32px",
  },
  dateBox: {
    margin: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75px",
  },
  reveal: {
    cursor: "pointer",
  },
};

type Props = {
  i: number;
};

const today = new Date();

export const Card: React.FC<Props> = ({ i }) => {
  const offset = i - 1;
  const date = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
  const [show, setShow] = React.useState(date < new Date());
  return (
    <div key={i} style={styles.card}>
      <div style={styles.dateBox}>
        <span style={styles.dateText}>{`${
          date.getMonth() + 1
        }/${date.getDate()}`}</span>
        <span>{WEEK[date.getDay()]}</span>
      </div>
      {show ? (
        <Word word={getWord(date)} />
      ) : (
        <div style={styles.reveal} role="button" onClick={() => setShow(true)}>
          Click to reveal
        </div>
      )}
    </div>
  );
};
