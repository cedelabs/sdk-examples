import { initExchange } from "../utils";
import { executeMethod } from "./getWithdrawableBalances";

describe("getWithdrawableBalances", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return withdrawable balances", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "DOT": {
          "freeBalance": 544,
          "refFreeBalance": 2051.810394293424,
          "refTotalBalance": 2051.810394293424,
          "totalBalance": 544,
        },
        "ETH": {
          "freeBalance": 5.41,
          "refFreeBalance": 8863.228919922138,
          "refTotalBalance": 8863.228919922138,
          "totalBalance": 5.41,
        },
        "LINK": {
          "freeBalance": 579.5,
          "refFreeBalance": 4358.816909307051,
          "refTotalBalance": 4358.816909307051,
          "totalBalance": 579.5,
        },
        "USDT": {
          "freeBalance": 5885,
          "refFreeBalance": 5860.824478241951,
          "refTotalBalance": 5860.824478241951,
          "totalBalance": 5885,
        },
      }
    `);
  });
});
