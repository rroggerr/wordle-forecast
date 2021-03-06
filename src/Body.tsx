import React from "react";
import { Card } from "./Card";

const NUM_CARDS = 10;
const TOP_GAP = '16px'

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#282936",
    height: "calc(100% - 120px - 50px)",
    overflowY: "hidden",
  },
  scrollWrapper: {
    height: `calc(100% - ${TOP_GAP})`,
    overflowY: "auto",
    margin: `${TOP_GAP} 0 0 0`,
  },
};

export const Body: React.FC = () => {
  const today = new Date();
  return (
    <div style={styles.body}>
      <div style={styles.scrollWrapper}>
        {Array.from(Array(NUM_CARDS).keys()).map((i) => (
          <Card key={i} i={i} today={today} />
        ))}
      </div>
    </div>
  );
};
