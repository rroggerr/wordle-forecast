import { words } from "./words";

export const getWord = (date: Date) => {
  const origin = new Date(2021, 5, 19, 0, 0, 0, 0);
  const today = date,
    t = new Date(today).setHours(0, 0, 0, 0) - origin.setHours(0, 0, 0, 0);
  const s = Math.round(t / 864e5);
  return words[s % words.length];
};
