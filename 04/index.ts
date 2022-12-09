import { DATA_04, DATA_04_TEST } from "./data";
const isFullOverlap = (a: number[], b: number[]): boolean => {
  const a0InB = a[0] >= b[0] && a[0] <= b[1];
  const a1InB = a[1] >= b[0] && a[1] <= b[1];
  return a0InB && a1InB;
};

const countFullOverlap = (pairs: number[][][]): number => {
  const fullOverlaps = pairs.filter(
    (p) => isFullOverlap(p[0], p[1]) || isFullOverlap(p[1], p[0])
  );
  return fullOverlaps.length;
};

console.log(countFullOverlap(DATA_04_TEST));
console.log(countFullOverlap(DATA_04));

const isPartialOverlap = (a: number[], b: number[]): boolean => {
  const a0InB = a[0] >= b[0] && a[0] <= b[1];
  const a1InB = a[1] >= b[0] && a[1] <= b[1];
  return a0InB || a1InB;
};

const countPartialOverlap = (pairs: number[][][]): number => {
  const partialOverlaps = pairs.filter(
    (p) => isPartialOverlap(p[0], p[1]) || isPartialOverlap(p[1], p[0])
  );
  return partialOverlaps.length;
};

console.log(countPartialOverlap(DATA_04_TEST));
console.log(countPartialOverlap(DATA_04));
