import { initExchange } from "../utils";
import { executeMethod } from "./getWithdrawableBalances";

describe("getWithdrawableBalances", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return withdrawable balances", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(
      {
        DOT: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          totalBalance: expect.any(Number),
        },
        ETH: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          totalBalance: expect.any(Number),
        },
        LINK: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          totalBalance: expect.any(Number),
        },
        USDT: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          totalBalance: expect.any(Number),
        },
      },
      `
      {
        "DOT": {
          "freeBalance": Any<Number>,
          "refFreeBalance": Any<Number>,
          "refTotalBalance": Any<Number>,
          "totalBalance": Any<Number>,
        },
        "ETH": {
          "freeBalance": Any<Number>,
          "refFreeBalance": Any<Number>,
          "refTotalBalance": Any<Number>,
          "totalBalance": Any<Number>,
        },
        "LINK": {
          "freeBalance": Any<Number>,
          "refFreeBalance": Any<Number>,
          "refTotalBalance": Any<Number>,
          "totalBalance": Any<Number>,
        },
        "USDT": {
          "freeBalance": Any<Number>,
          "refFreeBalance": Any<Number>,
          "refTotalBalance": Any<Number>,
          "totalBalance": Any<Number>,
        },
      }
    `
    );
  });
});
