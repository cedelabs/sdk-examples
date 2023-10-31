import { initExchange } from "../utils";
import { executeMethod } from "./getBalances";

describe("getBalances", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return balances", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "DOT": {
            "freeBalance": 544,
            "margin": {
              "freeBalance": 70.19354838709677,
              "refFreeBalance": 0,
              "refTotalBalance": 0,
              "refUsedBalance": 0,
              "totalBalance": 70.19354838709677,
              "usedBalance": 0,
            },
            "refFreeBalance": 0,
            "refTotalBalance": 0,
            "refUsedBalance": 0,
            "spot": {
              "freeBalance": 473.80645161290323,
              "refFreeBalance": 0,
              "refTotalBalance": 0,
              "refUsedBalance": 0,
              "totalBalance": 473.80645161290323,
              "usedBalance": 0,
            },
            "totalBalance": 544,
            "usedBalance": 0,
          },
          "ETH": {
            "freeBalance": 5.41,
            "futures": {
              "freeBalance": 2.5873913043478263,
              "refFreeBalance": 0,
              "refTotalBalance": 0,
              "refUsedBalance": 0,
              "totalBalance": 2.5873913043478263,
              "usedBalance": 0,
            },
            "refFreeBalance": 0,
            "refTotalBalance": 0,
            "refUsedBalance": 0,
            "spot": {
              "freeBalance": 2.822608695652174,
              "refFreeBalance": 0,
              "refTotalBalance": 0,
              "refUsedBalance": 0,
              "totalBalance": 2.822608695652174,
              "usedBalance": 0,
            },
            "totalBalance": 5.41,
            "usedBalance": 0,
          },
          "LINK": {
            "freeBalance": 579.5,
            "futures": {
              "freeBalance": 253.53125,
              "refFreeBalance": 0,
              "refTotalBalance": 0,
              "refUsedBalance": 0,
              "totalBalance": 253.53125,
              "usedBalance": 0,
            },
            "refFreeBalance": 0,
            "refTotalBalance": 0,
            "refUsedBalance": 0,
            "spot": {
              "freeBalance": 325.96875,
              "refFreeBalance": 0,
              "refTotalBalance": 0,
              "refUsedBalance": 0,
              "totalBalance": 325.96875,
              "usedBalance": 0,
            },
            "totalBalance": 579.5,
            "usedBalance": 0,
          },
          "USDT": {
            "freeBalance": 5885,
            "futures": {
              "freeBalance": NaN,
              "refFreeBalance": NaN,
              "refTotalBalance": NaN,
              "refUsedBalance": 0,
              "totalBalance": NaN,
              "usedBalance": 0,
            },
            "margin": {
              "freeBalance": NaN,
              "refFreeBalance": NaN,
              "refTotalBalance": NaN,
              "refUsedBalance": 0,
              "totalBalance": NaN,
              "usedBalance": 0,
            },
            "other": {
              "freeBalance": NaN,
              "refFreeBalance": NaN,
              "refTotalBalance": NaN,
              "refUsedBalance": 0,
              "totalBalance": NaN,
              "usedBalance": 0,
            },
            "refFreeBalance": 0,
            "refTotalBalance": 0,
            "refUsedBalance": 0,
            "spot": {
              "freeBalance": NaN,
              "refFreeBalance": NaN,
              "refTotalBalance": NaN,
              "refUsedBalance": 0,
              "totalBalance": NaN,
              "usedBalance": 0,
            },
            "totalBalance": 5885,
            "usedBalance": 0,
          },
        },
        "hydrate": false,
        "key": "PortfolioServiceMock-660450-211321-340329-997426-833220-",
      }
    `);
  });
});
