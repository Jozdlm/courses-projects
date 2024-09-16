import { getActiveUser, getUser } from "../../src/scripts/05-functions";

describe("Testing file 05-functions.test", () => {
  test("should return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(userTest).toEqual(user);
  });

  test('the active username should be "Jozuan"', () => {
    const name = "Jozuan";

    const activeUser = getActiveUser(name);

    expect(activeUser).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
