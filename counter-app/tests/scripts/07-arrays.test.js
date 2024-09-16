import { returnAnArray } from "../../src/scripts/07-arrays";

describe("test in the 07-arrays file ", () => {
  test("the function should return a string and a number", () => {
    const [letters, numbers] = returnAnArray();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
