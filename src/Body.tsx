import React from "react";
import { Card } from "./Card";
const NUM_CARDS = 8;

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#282936",
    height: "calc(100% - 120px)",
    overflowY: "hidden",
  },
  scrollWrapper: {
    height: "calc(100% - 32px)",
    overflowY: "auto",
    margin: "16px auto",
  },
};

export const Body: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.scrollWrapper}>
        {Array.from(Array(NUM_CARDS).keys()).map((i) => (
          <Card key={i} i={i} />
        ))}
      </div>
    </div>
  );
};
