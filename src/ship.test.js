import { ship } from "./ship";

test("testing the ship", () => {
  const theShip = ship(3);
  expect(theShip.length).toBe(3);
});

test("testing hit registration", () => {
  const theShip = ship(3);
  expect(theShip.getTimesHit()).toBe(0);

  theShip.hit();

  expect(theShip.getTimesHit()).toBe(1);
});

test("test if isSunk is working", () => {
  const theShip = ship(3);
  expect(theShip.getSunkValue()).toBeFalsy();

  theShip.hit();
  theShip.hit();
  theShip.hit();

  expect(theShip.getSunkValue()).toBeTruthy();
});
