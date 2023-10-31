import { initExchange } from "../utils";
import { executeMethod } from "./getMarketRate";

describe("getMarketRate", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return market rate", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
