import React from "react";
import { Word } from "./Word";
import { getWord } from "./getWord";

const NUM_CARDS = 8;
const CARD_WIDTH = 450;
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#282936",
    height: "calc(100% - 120px)",
    overflowY: "hidden",
  },
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
  scrollWrapper: {
    height: "calc(100% - 32px)",
    overflowY: "auto",
    margin: "16px auto",
  },
  dateText: {
    fontWeight: "900",
    fontSize: "36px",
  },
  dateBox: {
    margin: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100px",
  },
};

export const Body: React.FC = () => {
  const today = new Date();
  return (
    <div style={styles.body}>
      <div style={styles.scrollWrapper}>
        {Array.from(Array(NUM_CARDS).keys()).map((i) => {
          const offset = i - 1;
          const date = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
          return (
            <div key={i} style={styles.card}>
              <div style={styles.dateBox}>
                <span style={styles.dateText}>{`${
                  date.getMonth() + 1
                }/${date.getDate()}`}</span>
                <span>{WEEK[date.getDay()]}</span>
              </div>
              <Word word={getWord(date)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
