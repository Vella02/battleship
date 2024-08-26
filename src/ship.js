export function ship(size, name) {
  const length = size;
  let timesHit = 0;
  let sunk = false;
  let shipName = name;

  function hit() {
    timesHit = timesHit + 1;
    isSunk();
    console.log(getSunkValue());
  }

  function getTimesHit() {
    return timesHit;
  }

  function getName() {
    return shipName;
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
    getName,
  };
}
