import { gameboard } from "./gameboard";

export function ship(size) {
  const length = size;
  let timesHit = 0;
  let sunk = false;

  function hit() {
    timesHit = timesHit + 1;
    isSunk();
    console.log(getSunkValue());
  }

  function getTimesHit() {
    return timesHit;
  }

  function isSunk() {
    sunk = timesHit === length;
    return sunk;
  }

  function getSunkValue() {
    return sunk;
  }

  return {
    length,
    hit,
    isSunk,
    getTimesHit,
    getSunkValue,
  };
}
