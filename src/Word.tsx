import React, { useEffect } from "react";
import "./word.css";
import "./wordle.css";

type Props = {
  word: string;
  hasAnimation?: boolean;
};

export const Word: React.FC<Props> = ({ word, ...props }) => {
  return (
    <div style={{ display: "flex" }} aria-label={word}>
      {word.split("").map((char, i) => (
        <CharBox key={i} offset={i} char={char} {...props} />
      ))}
    </div>
  );
};

type CharProps = Omit<Props & { char: string; offset: number }, "word">;

const CharBox: React.FC<CharProps> = ({ hasAnimation, char, offset = 0 }) => {
  const tileRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const runAnimation = async () => {
      if (tileRef.current) {
        await new Promise((r) => setTimeout(r, 100 * offset));
        tileRef.current.setAttribute("data-animation", "flip-in");
        tileRef.current.setAttribute("data-reveal", "true");
        await new Promise((r) => setTimeout(r, 250));
        tileRef.current.setAttribute("data-animation", "flip-out");
      }
    };
    if (hasAnimation) {
      runAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="wordbox tile"
      ref={tileRef}
      data-reveal={hasAnimation ? "false" : true}
    >
      <span className="char">{char.toUpperCase()}</span>
    </div>
  );
};
