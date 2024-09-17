import { getGifImg } from "../../src/scripts/11-async-await";

describe("Test in the 11-async-await file", () => {
  test("should getGifImg return a gif image URL", async () => {
    const url = await getGifImg();
    expect(url).not.toBe("Image not founded");
  });
});
