import { initExchange } from "../utils";
import { executeMethod } from "./getPrices";

describe("getPrices", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return token prices", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`{}`);
  });
});
