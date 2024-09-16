import { getHeroById, getHeroesByOwner } from "../../src/scripts/08-imp-exp";
import Data from "../../src/data/heroes.js";

describe("test in the 08-imp-exp file", () => {
  test("the getHeroById should return a hero by Id", () => {
    const id = 1;
    const hero = getHeroById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("the getHeroById should return undefined if doesn't found a hero ", () => {
    const id = 100;
    const hero = getHeroById(id);

    expect(hero).toBeFalsy();
  });

  test("the getHeroesByOwner should return the DC's heroes", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(Data.filter((hero) => hero.owner === owner));
  });

  test("the getHeroesByOwner should return the Marvel's heroes", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(Data.filter((hero) => hero.owner === owner));
  });
});
