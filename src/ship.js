export function ship(size) {
  const length = size;
  let timesHit = 0;
  let sunk = false;

  function hit() {
    timesHit = timesHit + 1;
    // isSunk();
  }

  function getTimesHit() {
    return timesHit;
  }

  function isSunk() {
    if (timesHit === length) {
      sunk = true;
    }
    if (timesHit != length) {
      return sunk;
    }
    return sunk;
  }

  function getSunkValue() {
    return sunk;
  }

  return {
    length,
    timesHit,
    sunk,
    hit,
    isSunk,
    getTimesHit,
    getSunkValue,
  };
}
