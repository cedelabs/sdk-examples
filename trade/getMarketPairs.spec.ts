import { initExchange } from "../utils";
import { executeMethod } from "./getMarketPairs";

describe("getMarketPairs", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return market pairs", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
