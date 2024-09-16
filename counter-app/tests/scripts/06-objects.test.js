import { usContext } from "../../src/scripts/06-objects";

describe("test in the 06-objects file ", () => {
  test("the username should be a mix of the key, name and age", () => {
    const key = "1@a";
    const name = "Jozuan";
    const age = 22;

    const { username } = usContext({ key, name, age });

    expect(username).toBe(`${key}.${name}-${age}`);
  });
});
