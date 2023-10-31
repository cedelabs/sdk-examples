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
          "refFreeBalance": 0,
          "refTotalBalance": 0,
          "totalBalance": 544,
        },
        "ETH": {
          "freeBalance": 5.41,
          "refFreeBalance": 0,
          "refTotalBalance": 0,
          "totalBalance": 5.41,
        },
        "LINK": {
          "freeBalance": 579.5,
          "refFreeBalance": 0,
          "refTotalBalance": 0,
          "totalBalance": 579.5,
        },
        "USDT": {
          "freeBalance": 5885,
          "refFreeBalance": 0,
          "refTotalBalance": 0,
          "totalBalance": 5885,
        },
      }
    `);
  });
});
