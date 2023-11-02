import { initExchange } from "../utils";
import { executeMethod } from "./getBalances";

describe("getBalances", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return balances", async () => {
    const result = await executeMethod();

    expect(result).toMatchSnapshot({
      data: {
        DOT: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          refUsedBalance: 0,
          spot: {
            freeBalance: expect.any(Number),
            refFreeBalance: expect.any(Number),
            refTotalBalance: expect.any(Number),
            refUsedBalance: 0,
            totalBalance: expect.any(Number),
            usedBalance: 0,
          },
          totalBalance: expect.any(Number),
          usedBalance: 0,
        },
        ETH: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          refUsedBalance: 0,
          spot: {
            freeBalance: expect.any(Number),
            refFreeBalance: expect.any(Number),
            refTotalBalance: expect.any(Number),
            refUsedBalance: 0,
            totalBalance: expect.any(Number),
            usedBalance: 0,
          },
          totalBalance: expect.any(Number),
          usedBalance: 0,
        },
        LINK: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          refUsedBalance: 0,
          spot: {
            freeBalance: expect.any(Number),
            refFreeBalance: expect.any(Number),
            refTotalBalance: expect.any(Number),
            refUsedBalance: 0,
            totalBalance: expect.any(Number),
            usedBalance: 0,
          },
          totalBalance: expect.any(Number),
          usedBalance: 0,
        },
        USDT: {
          freeBalance: expect.any(Number),
          refFreeBalance: expect.any(Number),
          refTotalBalance: expect.any(Number),
          refUsedBalance: 0,
          spot: {
            freeBalance: NaN,
            refFreeBalance: NaN,
            refTotalBalance: NaN,
            refUsedBalance: 0,
            totalBalance: NaN,
            usedBalance: 0,
          },
          totalBalance: expect.any(Number),
          usedBalance: 0,
        },
      },
      hydrate: false,
      key: expect.any(String),
    });
  });
});
