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
          freeBalance: 544,
          margin: {
            freeBalance: 70.19354838709677,
            refFreeBalance: 264.7497282959257,
            refTotalBalance: 264.7497282959257,
            refUsedBalance: 0,
            totalBalance: 70.19354838709677,
            usedBalance: 0,
          },
          refFreeBalance: 2051.810394293424,
          refTotalBalance: 2051.810394293424,
          refUsedBalance: 0,
          spot: {
            freeBalance: 473.80645161290323,
            refFreeBalance: 1787.0606659974985,
            refTotalBalance: 1787.0606659974985,
            refUsedBalance: 0,
            totalBalance: 473.80645161290323,
            usedBalance: 0,
          },
          totalBalance: 544,
          usedBalance: 0,
        },
        ETH: {
          freeBalance: 5.41,
          futures: {
            freeBalance: 2.5873913043478263,
            refFreeBalance: 4238.935570397544,
            refTotalBalance: 4238.935570397544,
            refUsedBalance: 0,
            totalBalance: 2.5873913043478263,
            usedBalance: 0,
          },
          refFreeBalance: 8863.228919922138,
          refTotalBalance: 8863.228919922138,
          refUsedBalance: 0,
          spot: {
            freeBalance: 2.822608695652174,
            refFreeBalance: 4624.293349524593,
            refTotalBalance: 4624.293349524593,
            refUsedBalance: 0,
            totalBalance: 2.822608695652174,
            usedBalance: 0,
          },
          totalBalance: 5.41,
          usedBalance: 0,
        },
        LINK: {
          freeBalance: 579.5,
          futures: {
            freeBalance: 253.53125,
            refFreeBalance: 1906.9823978218346,
            refTotalBalance: 1906.9823978218346,
            refUsedBalance: 0,
            totalBalance: 253.53125,
            usedBalance: 0,
          },
          refFreeBalance: 4358.816909307051,
          refTotalBalance: 4358.816909307051,
          refUsedBalance: 0,
          spot: {
            freeBalance: 325.96875,
            refFreeBalance: 2451.834511485216,
            refTotalBalance: 2451.834511485216,
            refUsedBalance: 0,
            totalBalance: 325.96875,
            usedBalance: 0,
          },
          totalBalance: 579.5,
          usedBalance: 0,
        },
        USDT: {
          freeBalance: 5885,
          futures: {
            freeBalance: NaN,
            refFreeBalance: NaN,
            refTotalBalance: NaN,
            refUsedBalance: 0,
            totalBalance: NaN,
            usedBalance: 0,
          },
          margin: {
            freeBalance: NaN,
            refFreeBalance: NaN,
            refTotalBalance: NaN,
            refUsedBalance: 0,
            totalBalance: NaN,
            usedBalance: 0,
          },
          other: {
            freeBalance: NaN,
            refFreeBalance: NaN,
            refTotalBalance: NaN,
            refUsedBalance: 0,
            totalBalance: NaN,
            usedBalance: 0,
          },
          refFreeBalance: 5860.824478241951,
          refTotalBalance: 5860.824478241951,
          refUsedBalance: 0,
          spot: {
            freeBalance: NaN,
            refFreeBalance: NaN,
            refTotalBalance: NaN,
            refUsedBalance: 0,
            totalBalance: NaN,
            usedBalance: 0,
          },
          totalBalance: 5885,
          usedBalance: 0,
        },
      },
      hydrate: false,
      key: expect.any(String),
    });
  });
});
