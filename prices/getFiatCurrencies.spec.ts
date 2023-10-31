import { initExchange } from "../utils";
import { executeMethod } from "./getFiatCurrencies";

describe("getFiatCurrencies", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return fiat currencies", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "name": "United States Dollar",
          "symbol": "USD",
          "symbolNative": "$",
        },
        {
          "name": "Euro",
          "symbol": "EUR",
          "symbolNative": "€",
        },
        {
          "name": "British Pound Sterling",
          "symbol": "GBP",
          "symbolNative": "£",
        },
      ]
    `);
  });
});
