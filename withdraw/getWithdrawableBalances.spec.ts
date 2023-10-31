import { initExchange } from "../utils";
import { executeMethod } from "./getWithdrawableBalances";

describe("getWithdrawableBalances", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return withdrawable balances", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
