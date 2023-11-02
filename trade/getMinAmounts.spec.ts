import { initExchange } from "../utils";
import { executeMethod } from "./getMinAmounts";

describe("getMinAmounts", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return min amounts", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "minBaseAmount": "0.005555555555555555",
        "minPrice": "0.01",
        "minQuoteAmount": "10",
      }
    `);
  });
});
