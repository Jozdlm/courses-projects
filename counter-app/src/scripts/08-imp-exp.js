import Heroes from "../data/heroes.js";

export const getHeroById = (id) => Heroes.find((hero) => hero.id === id);

export const getHeroesByOwner = (owner) =>
  Heroes.filter((hero) => hero.owner === owner);
