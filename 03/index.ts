import { DATA_03, DATA_03_TEST } from "./data";

const splitIn2 = (rucksack: string): string[] => {
  return [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ];
};

const getCommonItem = (a: string, b: string): string => {
  return [...a].find((char) => b.includes(char));
};

const getCommonItemGeneric = (...shelves: string[]): string => {
  return [...shelves[0]].find((char) =>
    shelves.every((shelf) => shelf.includes(char))
  );
};

const getValueOfItem = (a: string): number => {
  let code = a.charCodeAt(0);
  if (code >= 97 && code <= 122) code -= 96;
  else code += -64 + 26;
  return code;
};

console.log(
  DATA_03_TEST.map(splitIn2)
    .map((shelvePair) => getCommonItemGeneric(shelvePair[0], shelvePair[1]))
    .map(getValueOfItem)
    .reduce((acc, item) => acc + item, 0)
);

console.log(
  DATA_03.map(splitIn2)
    .map((shelvePair) => getCommonItemGeneric(shelvePair[0], shelvePair[1]))
    .map(getValueOfItem)
    .reduce((acc, item) => acc + item, 0)
);

const getGroupsBages = (arr: string[]): string[] => {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    const commonItem = getCommonItemGeneric(arr[i], arr[i + 1], arr[i + 2]);
    result.push(commonItem);
  }
  return result;
};

console.log(
  getGroupsBages(DATA_03_TEST)
    .map(getValueOfItem)
    .reduce((acc, item) => acc + item, 0)
);
console.log(
  getGroupsBages(DATA_03)
    .map(getValueOfItem)
    .reduce((acc, item) => acc + item, 0)
);
