import React from "react";

const LINK = "https://www.powerlanguage.co.uk/wordle/";

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: "#1F202C",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: "24px",
    fontWeight: "800",
    textDecoration: "none",
  },
};

export const Footer: React.FC = () => {
  return (
    <div style={styles.footer}>
      <a style={styles.footerText} href={LINK}>
        Take me to Wordle
      </a>
    </div>
  );
};
