import { initExchange } from "../utils";
import { executeMethod } from "./getMarketPairs";

describe("getMarketPairs", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return market pairs", async () => {
    const result = await executeMethod();

    expect(result).toContainEqual({
      active: true,
      base: "BTC",
      limits: {
        amount: { max: 9000, min: 0.00001 },
        cost: { min: 10 },
        price: { max: 1000000, min: 0.01 },
      },
      maker: 0.001,
      pairSymbol: "BTC/USDT",
      precision: { amount: 5, base: 0, price: 2, quote: 0 },
      quote: "USDT",
      taker: 0.001,
      type: "spot",
    });
  });
});
