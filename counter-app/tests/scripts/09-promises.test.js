import { getHeroByIdAsync } from "../../src/scripts/09-promises";

describe("Testing on 09-promises file", () => {
  test("should getHeroByIdAsync return a hero", (done) => {
    const id = 1;
    getHeroByIdAsync(1).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("should getHeroByIdAsync return an error if the hero is not found", (done) => {
    const id = 100;
    getHeroByIdAsync(100)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe: ${id}`);
        done();
      });
  });
});
