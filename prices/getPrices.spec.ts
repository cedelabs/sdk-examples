import { initExchange } from "../utils";
import { executeMethod } from "./getPrices";

describe("getPrices", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return token prices", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "AVAX": 9.455109874685059,
        "BNB": 212.78111366,
        "BTC": 26854.01620548817,
        "DOT": 3.771710283627618,
        "ETH": 1638.3047911131491,
        "LINK": 7.521685779649785,
        "USDT": 0.995892009896678,
      }
    `);
  });
});
