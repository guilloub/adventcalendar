import { DATA_05_INTRUCTIONS, DATA_05_SHIP, Ship } from "./data";

const reverseData = (ship: Ship) => {
  ship.forEach((stack) => {
    stack.reverse();
  });
  return ship;
};

const moveOneCrate = (
  ship: Ship,
  source: number,
  destination: number
): void => {
  const crate = ship.at(source - 1).pop();
  ship.at(destination - 1).push(crate);
};

const moveMultipleCrates = (
  ship: Ship,
  nbCrates: number,
  source: number,
  destination: number
): void => {
  const stack = ship.at(source - 1);
  const crates = stack.splice(stack.length - nbCrates);
  ship.at(destination - 1).push(...crates);
};

const executeInstructions = (ship: Ship, instructions: number[][]): void => {
  for (const instruction of instructions) {
    for (let i = 0; i < instruction.at(0); i++) {
      moveOneCrate(ship, instruction.at(1), instruction.at(2));
    }
  }
};

const executeInstructionsPart2 = (
  ship: Ship,
  instructions: number[][]
): void => {
  for (const instruction of instructions) {
    moveMultipleCrates(
      ship,
      instruction.at(0),
      instruction.at(1),
      instruction.at(2)
    );
  }
};

const getResult = (ship: Ship): string => {
  return ship.map((stack) => stack.at(-1)).join("");
};

// const myShip: Ship = DATA_05_SHIP_TEST;
const myShip: Ship = reverseData(DATA_05_SHIP);

executeInstructionsPart2(myShip, DATA_05_INTRUCTIONS);

console.log(getResult(myShip));
