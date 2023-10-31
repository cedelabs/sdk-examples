import { initExchange } from "../utils";
import { executeMethod } from "./getBalances";

describe("getBalances", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return balances", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
