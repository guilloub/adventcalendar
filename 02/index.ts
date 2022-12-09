import { DATA_O2, DATA_O2_TEST, SCORE_MAP } from "./data";

const ABCtoRPS = (x: "A" | "B" | "C"): "R" | "P" | "S" => {
  switch (x) {
    case "A":
      return "R";
    case "B":
      return "P";
    case "C":
      return "S";
  }
};
const XYZtoRPS = (x: "X" | "Y" | "Z"): "R" | "P" | "S" => {
  switch (x) {
    case "X":
      return "R";
    case "Y":
      return "P";
    case "Z":
      return "S";
  }
};

const getRoundOutput = (
  otherGuy: "R" | "P" | "S",
  me: "R" | "P" | "S"
): number => {
  if (me === otherGuy) return 3;

  switch (me) {
    case "R":
      return otherGuy === "S" ? 6 : 0;
    case "P":
      return otherGuy === "R" ? 6 : 0;
    case "S":
      return otherGuy === "P" ? 6 : 0;
  }
};

const getRoundTotalScore = (round: any[]): number => {
  const winScore = getRoundOutput(ABCtoRPS(round[0]), XYZtoRPS(round[1]));
  const toolScore = SCORE_MAP.get(round[1]);

  //   console.log(winScore, toolScore);

  return winScore + toolScore;
};

const getTournamentScore = (tournament: any[][]): number => {
  const score = tournament.map((round) => getRoundTotalScore(round));
  return score.reduce((acc, curr) => acc + curr, 0);
};

console.log(getTournamentScore(DATA_O2_TEST));
console.log(getTournamentScore(DATA_O2));
