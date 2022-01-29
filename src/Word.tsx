import React from "react";

type Props = {
  word: string;
};

const styles: Record<string, React.CSSProperties> = {
  wordBox: {
    backgroundColor: "#6AA964",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 4px",
    flexDirection: "row",
  },
  char: {
    color: "white",
    fontWeight: "bold",
    fontSize: "42px",
  },
};

export const Word: React.FC<Props> = ({ word }) => {
  return (
    <div style={{ display: "flex" }}>
      {word.split("").map((char, i) => {
        return (
          <div style={styles.wordBox} key={i}>
            <span style={styles.char}>{char.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
};
