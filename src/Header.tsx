import React from "react";
import { Word } from "./Word";

const styles: Record<string, React.CSSProperties> = {
  header: {
    backgroundColor: "#1F202C",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headerText: {
    color: "white",
    fontSize: "36px",
    fontWeight: "900",
  },
};

export const Header: React.FC = () => {
  return (
    <div style={styles.header}>
      <Word word="Wordle" />
      <span style={styles.headerText}>Forecast</span>
    </div>
  );
};
