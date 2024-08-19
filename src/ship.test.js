import { ship } from "./ship";

const theShip = ship(5);

test("testing the ship", () => {
  expect(theShip.length).toBe(5);
});

test("testing hit registration", () => {
  expect(theShip.getTimesHit()).toBe(0);

  theShip.hit();

  expect(theShip.getTimesHit()).toBe(1);
});
