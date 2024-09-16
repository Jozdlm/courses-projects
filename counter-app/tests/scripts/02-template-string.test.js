import { greeting } from "../../src/scripts/02-template-string";

describe("Tests on 02-template-string", () => {
  test("should return 'Hello Jozuan'", () => {
    const name = "Jozuan";
    const message = greeting(name);

    expect(message).toBe(`Hello ${name}`);
  });
});
