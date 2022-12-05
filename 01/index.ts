import { DATA_01 } from "./data";

console.log("hello world");

const parseData = (str: string) => {
  const splitted = str.split(/\r?\n/);
  const data = [[]];

  splitted.forEach((e) => {
    if (e === "") {
      data.push([]);
    } else {
      data.at(-1).push(Number.parseFloat(e));
    }
  });

  return data;
};

const getMaxCalories = (data: number[][], nbElement = 1) => {
  const sums = data.map((elf) => elf.reduce((acc, item) => acc + item, 0));
  sums.sort((a, b) => b - a);

  //   console.log(sums);

  return sums.slice(0, nbElement).reduce((acc, item) => acc + item, 0);
};

const data = parseData(DATA_01);
const response1 = getMaxCalories(data);
const response2 = getMaxCalories(data, 3);

console.log(response1);
console.log(response2);
